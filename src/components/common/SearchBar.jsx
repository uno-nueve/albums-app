import styled from "styled-components";
import { Button, ButtonIcon } from "../ui/Button";
import Input from "../ui/Input";
import { SearchMd } from "../ui/svgs";
import { useForm } from "../../hooks/useForm";
import { useAxios } from "../../hooks/useAxios";
import { SALES } from "../../utils/urls";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../state/orders/ordersSlice";
import { ListItem } from "../ListItem";
import { FlexContainer } from "../ui/FlexContainer";

const InlineButton = styled(Button)`
    max-width: max-content;
    gap: 1rem;
`;

const DynamicText = styled.p`
    @media (max-width: 480px) {
        display: none;
    }
`;

export const Searchbar = () => {
    const { formData, handleChange } = useForm({ search: "" });
    const { handleGet, isLoading } = useAxios();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.orders);

    const handleClick = async (id) => {
        const res = await handleGet(`${SALES}/${id}`);
        dispatch(setOrder(res));
    };

    return (
        <FlexContainer
            gap="1rem"
            p="0.75rem"
            maxw="680px"
            bg="var(--dark)"
            color="var(--light)"
            round="1.5rem"
            column
        >
            <FlexContainer items="center">
                <FlexContainer gap="1.25rem" w="100%" p="0 1rem" column>
                    <label htmlFor="search">
                        <Input
                            id="search"
                            name="search"
                            value={formData.search}
                            onChange={handleChange}
                            placeholder="[ Número de orden ]"
                        />
                    </label>
                </FlexContainer>
                <InlineButton onClick={() => handleClick(formData.search)}>
                    <DynamicText>Buscar</DynamicText>
                    <ButtonIcon w="1rem" h="1rem">
                        <SearchMd />
                    </ButtonIcon>
                </InlineButton>
            </FlexContainer>
            {isLoading ? <div>Loading...</div> : data !== null && <ListItem order={data} />}
        </FlexContainer>
    );
};
