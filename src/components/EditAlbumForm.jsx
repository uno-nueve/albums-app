import styled from "styled-components";
import FormWrapper from "./ui/FormWrapper";
import { useForm } from "../hooks/useForm";
import { useAxios } from "../hooks/useAxios";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { useDispatch } from "react-redux";
import { ALBUMS } from "../utils/urls";
import InputGroup from "./ui/InputGroup";
import Input from "./ui/Input";
import Select from "./ui/Select";
import { genres } from "../utils/musicGenres";
import { Button } from "./ui/Button";
import { setAlbum } from "../state/albums/albumDetailsSlice";
import { ErrorToast } from "./Toast";
import { ThreeDotsFade } from "react-svg-spinners";

const FormLayout = styled(FormWrapper)`
    @media (max-width: 500px) {
        min-width: auto;
        width: 100vw;
        height: calc(100vh - 200px);
        border-radius: 0;
    }
`;

export const EditAlbumForm = ({ album }) => {
    const initialForm = {
        titulo: album?.titulo,
        artista: album?.artista,
        genero: album?.genero,
        stock: album?.stock,
        estado: album?.estado,
        images: album?.images,
    };

    const { formData, handleChange, setFormData } = useForm(initialForm);
    const { handlePut, error, isLoading } = useAxios();
    const { setShowModal } = useContext(ModalContext);
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        await handlePut(`${ALBUMS}/${album._id}`, formData);
        dispatch(setAlbum(formData));
        setTimeout(() => setShowModal(false), 300);
        setFormData(initialForm);
    };

    return (
        <>
            <FormLayout>
                <h3>Nuevo Album</h3>
                {error && <ErrorToast>{error}</ErrorToast>}
                <InputGroup>
                    <label htmlFor="titulo">
                        Título
                        <Input
                            id="titulo"
                            name="titulo"
                            onChange={handleChange}
                            defaultValue={album?.titulo}
                        />
                    </label>
                    <label htmlFor="artista">
                        Artista
                        <Input
                            id="artista"
                            name="artista"
                            onChange={handleChange}
                            defaultValue={album?.artista}
                        />
                    </label>
                    <label htmlFor="genero">
                        Género
                        <Select
                            id="genero"
                            name="genero"
                            onChange={handleChange}
                            defaultValue={album?.genero}
                        >
                            <option defaultValue="" hidden></option>
                            {genres.map((genre) => (
                                <option defaultValue={genre} key={genre}>
                                    {genre}
                                </option>
                            ))}
                        </Select>
                    </label>
                    <label htmlFor="stock">
                        Stock
                        <Input
                            id="stock"
                            name="stock"
                            type="number"
                            onChange={handleChange}
                            defaultValue={album?.stock}
                        />
                    </label>
                    <label htmlFor="url">
                        URL Imagen
                        <Input
                            id="url"
                            name="url"
                            onChange={handleChange}
                            defaultValue={album?.images[0].url}
                        />
                    </label>
                </InputGroup>
                <Button onClick={onSubmit}>{isLoading ? <ThreeDotsFade /> : "Añadir"}</Button>
            </FormLayout>
        </>
    );
};
