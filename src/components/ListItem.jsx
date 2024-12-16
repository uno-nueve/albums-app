import { useAxios } from "../hooks/useAxios";
import { SALES } from "../utils/urls";
import { FlexContainer } from "../components/ui/FlexContainer";
import { Image, ImageContainer } from "./ui/Image";
import styled from "styled-components";
import { Button, ButtonContainer, ButtonIcon } from "./ui/Button";
import { Text } from "./ui/Text";
import { Pill } from "./ui/Pill";
import { useLocation } from "react-router";
import { setOrder } from "../state/orders/ordersSlice";
import { useDispatch } from "react-redux";
import { XClose } from "./ui/svgs";

const LItem = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    max-width: 680px;
    padding: 0.5rem 1rem 1rem;
    gap: 0.5rem;
    background: linear-gradient(white, #f5f5f5);
    color: #000000;
    border: 1px solid #e5e5e5;
    border-radius: 0.75rem;
`;

const InfoContainer = styled(FlexContainer)`
    @media (max-width: 500px) {
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
    }
`;

export const ListItem = ({ order }) => {
    const { ordenNumero, nombreCliente, monto, album, _id, estado } = order;
    const { handleDelete, handlePut, isLoading } = useAxios();
    const location = useLocation();
    const dispatch = useDispatch();

    const onDelete = async (id) => {
        await handleDelete(`${SALES}/${id}`);
    };

    const handleReturn = async () => {
        const res = await handlePut(`${SALES}/${ordenNumero}/return`);
        console.log("RETURN", res);
        dispatch(setOrder(res.venta));
    };

    return (
        <LItem>
            <FlexContainer justify="space-between" items="center">
                <InfoContainer gap="0.75rem" items="center">
                    <Text size="1.125rem">ORDEN #{ordenNumero}</Text>
                    <Text size="0.875rem">{nombreCliente}</Text>
                </InfoContainer>
                <ButtonContainer h="1.5rem" minw="1.5rem" w="max-content">
                    {location.pathname === "/returns" ? (
                        <Button onClick={handleReturn}>
                            {isLoading ? "Devolviendo..." : "Devolver"}
                        </Button>
                    ) : (
                        <Button onClick={() => onDelete(_id)}>
                            <ButtonIcon w="1.125rem">
                                <XClose />
                            </ButtonIcon>
                        </Button>
                    )}
                </ButtonContainer>
            </FlexContainer>
            <InfoContainer gap="1rem" p="0.75rem" bg="#e5e5e5" round="0.75rem">
                <FlexContainer w="100%" gap="1.25rem" items="center">
                    <FlexContainer w="80px" h="80px">
                        <ImageContainer>
                            <Image src={album?.images[0].url} alt={album.titulo} />
                        </ImageContainer>
                    </FlexContainer>
                    <FlexContainer column>
                        <Text size="1.25rem">{album?.titulo}</Text>
                        <Text>{album?.artista}</Text>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer w="100%" justify="flex-end" items="center">
                    <FlexContainer gap="1.25rem" justify="space-between" items="center">
                        <Text size="1.25rem">${monto}</Text>
                        <Pill status={estado}>{estado}</Pill>
                    </FlexContainer>
                </FlexContainer>
            </InfoContainer>
        </LItem>
    );
};
