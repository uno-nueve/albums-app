import Button from "./ui/Button";
import FormWrapper from "./ui/FormWrapper";
import Input from "./ui/Input";
import InputGroup from "./ui/InputGroup";
import { useAxios } from "../hooks/useAxios";
import { useForm } from "../hooks/useForm";
import { useSelector } from "react-redux";
import axios from "axios";
import { ALBUMS, BASE_URL, BUY_ALBUM } from "../utils/urls";

export const CheckoutForm = ({ setResponse }) => {
    const data = useSelector((state) => state.cart.items);
    const { formData, handleChange } = useForm({ nombreCliente: "", monto: 2000 });
    const { handleAxios } = useAxios();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await Promise.all(
            data.map((item) =>
                handleAxios(() =>
                    axios.put(`${BASE_URL}${ALBUMS}/${item._id}${BUY_ALBUM}`, formData, {
                        headers: {
                            "Access-Control-Allow-Credentials": true,
                        },
                    })
                )
            )
        );

        setResponse(res);
    };

    return (
        <div>
            <FormWrapper>
                <InputGroup>
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
                </InputGroup>
            </FormWrapper>
        </div>
    );
};
