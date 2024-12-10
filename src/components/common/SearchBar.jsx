import styled from "styled-components";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { SearchMd } from "../ui/svgs";
import InputGroup from "../ui/InputGroup";

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
    return (
        <Row>
            <InputGroup>
                <label htmlFor="search">
                    <Input id="search" name="search" />
                </label>
            </InputGroup>
            <InlineButton>
                Buscar
                <ButtonIcon>
                    <SearchMd />
                </ButtonIcon>
            </InlineButton>
        </Row>
    );
};
