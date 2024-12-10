import styled from "styled-components";
import Button from "../ui/Button";
import Input from "../ui/Input";
import InputGroup from "../ui/InputGroup";
import Select from "../ui/Select";
import FormWrapper from "../ui/FormWrapper";
import { useState } from "react";
import axios from "axios";
import { ALBUMS, BASE_URL } from "../../utils/urls";

const FormContainer = styled(FormWrapper)`
    min-width: 100%;
    height: 100%;
    padding: 0;
    border: none;
`;

export const ModalForm = () => {
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        titulo: "",
        artista: "",
        genero: "",
        stock: "",
        images: [
            {
                url: "",
                height: 0,
                width: 0,
            },
        ],
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.post(`${BASE_URL}${ALBUMS}`, formData);
        } catch (e) {
            console.log(e);
            setError(e);
        } finally {
            setFormData({
                titulo: "",
                artista: "",
                genero: "",
                stock: "",
                images: [
                    {
                        url: "",
                        height: 0,
                        width: 0,
                    },
                ],
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        if (name === "url") {
            setFormData({
                ...formData,
                images: [{ url: value, height: 600, width: 600 }],
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <>
            <FormContainer>
                <h3>Nuevo Album</h3>
                {error && <p>Something went wrong ☹️</p>}
                <InputGroup>
                    <label htmlFor="titulo">
                        Título
                        <Input id="titulo" name="titulo" onChange={handleChange} />
                    </label>
                    <label htmlFor="artista">
                        Artista
                        <Input id="artista" name="artista" onChange={handleChange} />
                    </label>
                    <label htmlFor="genero">
                        Género
                        <Select id="genero" name="genero" onChange={handleChange}>
                            <option value="" hidden></option>
                            <option value="rap">Rap</option>
                            <option value="rock">Rock</option>
                            <option value="pop">Pop</option>
                            <option value="r&b">R&B</option>
                            <option value="tango">Tango</option>
                        </Select>
                    </label>
                    <label htmlFor="stock">
                        Stock
                        <Input id="stock" name="stock" type="number" onChange={handleChange} />
                    </label>
                    <label htmlFor="url">
                        URL Imagen
                        <Input id="url" name="url" onChange={handleChange} />
                    </label>
                </InputGroup>
                <Button onClick={handleSubmit}>Añadir</Button>
            </FormContainer>
        </>
    );
};
