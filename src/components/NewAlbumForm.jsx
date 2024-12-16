import { Button } from "./ui/Button";
import Input from "./ui/Input";
import InputGroup from "./ui/InputGroup";
import Select from "./ui/Select";
import FormWrapper from "./ui/FormWrapper";
import { ALBUMS } from "../utils/urls";
import { useForm } from "../hooks/useForm";
import { useAxios } from "../hooks/useAxios";
import { useDispatch } from "react-redux";
import { addAlbum } from "../state/albums/albumsSlice";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import styled from "styled-components";

const FormLayout = styled(FormWrapper)`
    @media (max-width: 500px) {
        min-width: auto;
        width: 100vw;
        height: calc(100vh - 200px);
        border-radius: 0;
    }
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
    const { handlePost, error } = useAxios();
    const { setShowModal } = useContext(ModalContext);

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        await handlePost(`${ALBUMS}`, formData);
        dispatch(addAlbum(formData));
        setTimeout(() => setShowModal(false), 300);
        setFormData(initialForm);
    };

    return (
        <>
            <FormLayout>
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
            </FormLayout>
        </>
    );
};
