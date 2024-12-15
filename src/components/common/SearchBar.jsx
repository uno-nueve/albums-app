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
    max-width: 200px;
    gap: 16px;
`;

export const Searchbar = () => {
    const { formData, handleChange } = useForm({ search: "" });
    const { handleGet, isLoading } = useAxios();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.orders);
    console.log(data);

    const handleClick = async (id) => {
        const res = await handleGet(`${SALES}/${id}`);
        dispatch(setOrder(res));
    };

    return (
        <FlexContainer gap="8px" p="20px" bg="#262626" round="24px" column>
            <FlexContainer items="center">
                <FlexContainer gap="20px" w="100%" p="0 16px" column>
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
                    Buscar
                    <ButtonIcon w="16px" h="16px">
                        <SearchMd />
                    </ButtonIcon>
                </InlineButton>
            </FlexContainer>
            {isLoading ? <div>Loading...</div> : data !== null && <ListItem order={data} />}
        </FlexContainer>
    );
};
