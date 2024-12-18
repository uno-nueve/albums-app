import { Button } from "./ui/Button";
import FormWrapper from "./ui/FormWrapper";
import Input from "./ui/Input";
import { useAxios } from "../hooks/useAxios";
import { useForm } from "../hooks/useForm";
import { useSelector } from "react-redux";
import { ALBUMS } from "../utils/urls";
import { FlexContainer } from "./ui/FlexContainer";
import { useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { Toast } from "./Toast";
import { ThreeDotsFade } from "react-svg-spinners";

export const CheckoutForm = () => {
    const [response, setResponse] = useState(null);
    const data = useSelector((state) => state.cart.items);
    const { formData, handleChange } = useForm({ nombreCliente: "", monto: 2000 });
    const { handlePut, isLoading } = useAxios();
    useTitle("Finalizar compra");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await Promise.all(
            data?.map((item) => handlePut(`${ALBUMS}/${item._id}/buy`, formData))
        );
        setResponse(res);
    };

    return (
        <FlexContainer gap="1.25rem" column>
            <FormWrapper>
                <FlexContainer gap="1.25rem" w="100%" column>
                    <label htmlFor="nombreCliente">
                        <Input
                            id="nombreCliente"
                            name="nombreCliente"
                            placeholder="Nombre y Apellido"
                            onChange={handleChange}
                            value={formData.nombreCliente}
                        />
                    </label>
                    <label htmlFor="monto">
                        <Input
                            id="monto"
                            name="monto"
                            type="number"
                            onChange={handleChange}
                            value={formData.monto}
                        />
                    </label>
                    <Button onClick={(e) => handleSubmit(e)}>Pagar</Button>
                </FlexContainer>
            </FormWrapper>
            {isLoading && (
                <FlexContainer justify="center">
                    <ThreeDotsFade color="var(--light)" width={"2rem"} height={"auto"} />
                </FlexContainer>
            )}
            {response &&
                response?.map(({ venta, album }) => (
                    <Toast venta={venta} album={album} key={venta?._id} />
                ))}
        </FlexContainer>
    );
};
