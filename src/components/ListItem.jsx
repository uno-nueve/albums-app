import { useAxios } from "../hooks/useAxios";
import { SALES } from "../utils/urls";
import { FlexContainer } from "../components/ui/FlexContainer";
import { Image, ImageContainer } from "./ui/Image";
import styled from "styled-components";
import Button from "./ui/Button";
import { Text } from "./ui/Text";
import { Pill } from "./ui/Pill";
import { useLocation } from "react-router";
import { setOrder } from "../state/orders/ordersSlice";
import { useDispatch } from "react-redux";

const LItem = styled.li`
    list-style: none;
    border: 1px solid black;
    padding: 16px;
`;

export const ListItem = ({ order }) => {
    const { ordenNumero, nombreCliente, monto, album, _id, estado } = order;
    const { handleDelete, handlePut } = useAxios();
    const location = useLocation();
    const dispatch = useDispatch();

    const onDelete = async (id) => {
        await handleDelete(`${SALES}/${id}`);
    };

    const handleReturn = async () => {
        const res = await handlePut(`${SALES}/${ordenNumero}/return`);
        dispatch(setOrder(res));
    };

    return (
        <LItem>
            <FlexContainer gap="16px">
                <FlexContainer width="100px" height="100px">
                    <ImageContainer>
                        <Image src={album.images[0].url} alt={album.titulo} />
                    </ImageContainer>
                </FlexContainer>
                <FlexContainer width="100%">
                    <FlexContainer column justifyContent="space-between">
                        <Text fontSize="20px">Orden #{ordenNumero}</Text>
                        <Text>Cliente: {nombreCliente}</Text>
                        <Text>Monto: ${monto}</Text>
                        <Pill status={estado}>{estado}</Pill>
                    </FlexContainer>
                </FlexContainer>
                <div>
                    {location.pathname === "/returns" ? (
                        <Button onClick={handleReturn}>Devolver</Button>
                    ) : (
                        <Button onClick={() => onDelete(_id)}>X</Button>
                    )}
                </div>
            </FlexContainer>
        </LItem>
    );
};
