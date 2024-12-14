import styled from "styled-components";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { SearchMd } from "../ui/svgs";
import InputGroup from "../ui/InputGroup";
import { useForm } from "../../hooks/useForm";
import { useAxios } from "../../hooks/useAxios";
import { SALES } from "../../utils/urls";
import { useState } from "react";

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
    const { handleGet } = useAxios();
    const [data, setData] = useState(null);

    const handleClick = async (id) => {
        const res = await handleGet(`${SALES}/${id}`);
        setData(res);
    };

    return (
        <>
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
            </Row>
            <h2>
                {data?.ordenNumero}
                {data?.nombreCliente}
            </h2>
        </>
    );
};
