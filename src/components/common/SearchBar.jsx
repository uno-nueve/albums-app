import styled from "styled-components";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { SearchMd } from "../ui/svgs";
import InputGroup from "../ui/InputGroup";
import { useForm } from "../../hooks/useForm";
import { useAxios } from "../../hooks/useAxios";
import { SALES } from "../../utils/urls";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../state/orders/ordersSlice";
import { ListItem } from "../ListItem";

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
    const { handleGet, isLoading } = useAxios();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.orders);
    console.log(data);

    const handleClick = async (id) => {
        const res = await handleGet(`${SALES}/${id}`);
        dispatch(setOrder(res));
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
            {isLoading ? <div>Loading...</div> : data !== null && <ListItem order={data} />}
        </>
    );
};
