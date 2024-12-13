import styled from "styled-components";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { SearchMd } from "../ui/svgs";
import InputGroup from "../ui/InputGroup";
import { useForm } from "../../hooks/useForm";
import { useAxios } from "../../hooks/useAxios";
import axios from "axios";
import { BASE_URL, RETURN_ALBUM, SALES } from "../../utils/urls";

const InlineButton = styled(Button)`
    max-width: 200px;
    gap: 20px;
`;

const ButtonIcon = styled.div`
    width: 19px;
    height: 19px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Searchbar = () => {
    const { formData, handleChange } = useForm({ search: "" });
    const { handleAxios, error } = useAxios();

    const handleClick = async (id) => {
        const res = await handleAxios(() =>
            axios.put(
                `${BASE_URL}${SALES}/${id}${RETURN_ALBUM}`,
                {},
                {
                    headers: {
                        "Access-Control-Allow-Credentials": true,
                    },
                }
            )
        );
        console.log(res);
    };

    return (
        <Row>
            <InputGroup>
                <label htmlFor="search">
                    <Input
                        id="search"
                        name="search"
                        value={formData.search}
                        onChange={handleChange}
                    />
                </label>
            </InputGroup>
            <InlineButton onClick={() => handleClick(formData.search)}>
                Buscar
                <ButtonIcon>
                    <SearchMd />
                </ButtonIcon>
            </InlineButton>
            {error && <span>Error returning album</span>}
        </Row>
    );
};
