import styled from "styled-components";
import Button from "./ui/Button";
import Input from "./ui/Input";
import InputGroup from "./ui/InputGroup";
import Select from "./ui/Select";
import FormWrapper from "./ui/FormWrapper";
import axios from "axios";
import { ALBUMS, BASE_URL } from "../utils/urls";
import { useForm } from "../hooks/useForm";
import { useAxios } from "../hooks/useAxios";
import { useDispatch } from "react-redux";
import { addAlbum } from "../state/albums/albumsSlice";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

const FormContainer = styled(FormWrapper)`
    min-width: 100%;
    height: 100%;
    padding: 0;
    border: none;
`;

export const NewAlbumForm = () => {
    const initialForm = {
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
    };

    const { formData, handleChange, setFormData } = useForm(initialForm);
    const { handleSubmit, error } = useAxios();
    const { setShowModal } = useContext(ModalContext);

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(axios.post(`${BASE_URL}${ALBUMS}`, formData));
        dispatch(addAlbum(formData));
        setTimeout(() => setShowModal(false), 300);
        setFormData(initialForm);
    };

    return (
        <>
            <FormContainer>
                <h3>Nuevo Album</h3>
                {error && <p>{error}</p>}
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
                <Button onClick={onSubmit}>Añadir</Button>
            </FormContainer>
        </>
    );
};
