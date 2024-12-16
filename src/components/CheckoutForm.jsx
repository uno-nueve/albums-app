import { Button } from "./ui/Button";
import FormWrapper from "./ui/FormWrapper";
import Input from "./ui/Input";
import { useAxios } from "../hooks/useAxios";
import { useForm } from "../hooks/useForm";
import { useSelector } from "react-redux";
import { ALBUMS } from "../utils/urls";
import { FlexContainer } from "./ui/FlexContainer";
import { useState } from "react";
import { Text } from "./ui/Text";
import { useTitle } from "../hooks/useTitle";

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
        <FlexContainer gap="20px" column>
            <FormWrapper>
                <FlexContainer gap="20px" w="100%" column>
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
            {isLoading && <div>Loading...</div>}
            {response &&
                response?.map(({ venta, album }) => (
                    <FlexContainer
                        key={venta?._id}
                        gap="8px"
                        bg="#86efac"
                        p="8px 12px"
                        round="12px"
                        color="#166534"
                        column
                    >
                        <FlexContainer gap="16px" items="center">
                            <Text size="1.125rem" weight="600">
                                Compra exitosa
                            </Text>
                            Orden #{venta?.ordenNumero}
                        </FlexContainer>
                        <FlexContainer>
                            <Text size="0.85rem">
                                Compraste: {album?.titulo} de {album?.artista}
                            </Text>
                        </FlexContainer>
                    </FlexContainer>
                ))}
        </FlexContainer>
    );
};
