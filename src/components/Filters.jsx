import Select from "./ui/Select";
import Input from "./ui/Input";
import FormWrapper from "./ui/FormWrapper";
import InputGroup from "./ui/InputGroup";
import styled from "styled-components";
import { Button, ButtonIcon } from "./ui/Button";
import { useAxios } from "../hooks/useAxios";
import { useForm } from "../hooks/useForm";
import { ALBUMS, SEARCH_ALBUM } from "../utils/urls";
import { useDispatch } from "react-redux";
import { indexAlbums } from "../state/albums/albumsSlice";
import { ErrorText, Text } from "./ui/Text";
import { FlexContainer } from "./ui/FlexContainer";
import { XClose } from "./ui/svgs";
import { genres } from "../utils/musicGenres";

const FormLayout = styled(FormWrapper)`
    min-width: 100%;
    padding: 0;
    background-color: transparent;
    border: none;
`;

const InputLayout = styled(InputGroup)`
    @media (max-width: 768px) {
        flex-direction: row;
        gap: 1rem;
    }
`;

const DynamicText = styled.p`
    @media (max-width: 540px) {
        display: none;
    }
`;

const InlineButton = styled(Button)`
    @media (max-width: 768px) {
        width: max-content;
    }
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
        <FlexContainer gap="0.5rem" column>
            <Text color="var(--accent)" weight="600">
                FILTRAR
            </Text>
            <FormLayout>
                <InputLayout>
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
                                {genres.map((genre) => (
                                    <option value={genre} key={genre}>
                                        {genre}
                                    </option>
                                ))}
                            </Select>
                        ) : (
                            <Select id="value" name="value" onChange={handleChange}>
                                <option value="" hidden></option>
                                <option value="Disponible">Disponible</option>
                                <option value="Agotado">Agotado</option>
                            </Select>
                        ))}
                    <InlineButton onClick={(e) => handleSubmit(e)}>Filtrar</InlineButton>
                    {formData.value && (
                        <InlineButton onClick={(e) => handleClean(e)}>
                            <DynamicText>Limpiar</DynamicText>
                            <ButtonIcon>
                                <XClose />
                            </ButtonIcon>
                        </InlineButton>
                    )}
                </InputLayout>
                {error && (
                    <ErrorText color="red">
                        No hay albums que coincidan con los parámetros de búsqueda
                    </ErrorText>
                )}
            </FormLayout>
        </FlexContainer>
    );
};
