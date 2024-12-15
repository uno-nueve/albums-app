import Select from "./ui/Select";
import Input from "./ui/Input";
import FormWrapper from "./ui/FormWrapper";
import InputGroup from "./ui/InputGroup";
import styled from "styled-components";
import { Button } from "./ui/Button";
import { useAxios } from "../hooks/useAxios";
import { useForm } from "../hooks/useForm";
import { ALBUMS, SEARCH_ALBUM } from "../utils/urls";
import { useDispatch } from "react-redux";
import { indexAlbums } from "../state/albums/albumsSlice";
import { ErrorText } from "./ui/Text";

const FormLayout = styled(FormWrapper)`
    min-width: 100%;
`;

export const Filters = () => {
    const { formData, handleChange } = useForm({ param: "", value: "" });
    const { handleGet, error, setError } = useAxios();
    const { param, value } = formData;
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await handleGet(`${SEARCH_ALBUM}?${param}=${value}`);
        dispatch(indexAlbums(res));
    };

    const handleClean = async (e) => {
        e.preventDefault();
        const res = await handleGet(`${ALBUMS}`);
        dispatch(indexAlbums(res));
        setError("");
    };

    return (
        <div>
            <h3>Filtrar</h3>
            <FormLayout>
                <InputGroup>
                    <Select id="param" name="param" onChange={handleChange}>
                        <option value="" hidden></option>
                        <option value="artista">Artista</option>
                        <option value="genero">Genero</option>
                        <option value="estado">Estado</option>
                    </Select>
                    {formData.param &&
                        (formData.param === "artista" ? (
                            <Input name="value" id="value" onChange={handleChange} />
                        ) : formData.param === "genero" ? (
                            <Select id="value" name="value" onChange={handleChange}>
                                <option value="" hidden></option>
                                <option value="rap">Rap</option>
                                <option value="rock">Rock</option>
                                <option value="pop">Pop</option>
                                <option value="rnb">R&B</option>
                                <option value="tango">Tango</option>
                            </Select>
                        ) : (
                            <Select id="value" name="value" onChange={handleChange}>
                                <option value="" hidden></option>
                                <option value="Disponible">Disponible</option>
                                <option value="Agotado">Agotado</option>
                            </Select>
                        ))}
                    <Button onClick={(e) => handleSubmit(e)}>Filtrar</Button>
                    {formData.value && (
                        <Button onClick={(e) => handleClean(e)}>Limpiar filtros</Button>
                    )}
                    {error && (
                        <ErrorText color="red">
                            No hay albums que coincidan con los parámetros de búsqueda
                        </ErrorText>
                    )}
                </InputGroup>
            </FormLayout>
        </div>
    );
};
