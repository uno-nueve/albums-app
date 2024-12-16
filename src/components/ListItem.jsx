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
    padding: 8px 16px 16px;
    gap: 8px;
    background: linear-gradient(white, #f5f5f5);
    color: #000000;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
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
                <InfoContainer gap="12px" items="center">
                    <Text size="18px">ORDEN #{ordenNumero}</Text>
                    <Text size="14px">{nombreCliente}</Text>
                </InfoContainer>
                <ButtonContainer h="24px" minw="24px" w="max-content">
                    {location.pathname === "/returns" ? (
                        <Button onClick={handleReturn}>
                            {isLoading ? "Devolviendo..." : "Devolver"}
                        </Button>
                    ) : (
                        <Button onClick={() => onDelete(_id)}>
                            <ButtonIcon w="19px">
                                <XClose />
                            </ButtonIcon>
                        </Button>
                    )}
                </ButtonContainer>
            </FlexContainer>
            <InfoContainer gap="16px" p="12px" bg="#e5e5e5" round="12px">
                <FlexContainer w="100%" gap="20px" items="center">
                    <FlexContainer w="80px" h="80px">
                        <ImageContainer>
                            <Image src={album?.images[0].url} alt={album.titulo} />
                        </ImageContainer>
                    </FlexContainer>
                    <FlexContainer column>
                        <Text size="20px">{album?.titulo}</Text>
                        <Text>{album?.artista}</Text>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer w="100%" justify="flex-end" items="center">
                    <FlexContainer gap="20px" justify="space-between" items="center">
                        <Text size="20px">${monto}</Text>
                        <Pill status={estado}>{estado}</Pill>
                    </FlexContainer>
                </FlexContainer>
            </InfoContainer>
        </LItem>
    );
};
