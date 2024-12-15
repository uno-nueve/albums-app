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
    padding: 8px;
    gap: 8px;
    background-color: #262626;
    color: #ffffff;
    border-radius: 16px;
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
            <FlexContainer justifyContent="space-between" alignItems="center" padding="0 16px">
                <FlexContainer gap="24px" alignItems="center">
                    <Text fontSize="20px">ORDEN #{ordenNumero}</Text>
                    <Text>{nombreCliente}</Text>
                </FlexContainer>
                <ButtonContainer h="24px" minw="24px" w="max-content">
                    {location.pathname === "/returns" ? (
                        <Button onClick={handleReturn}>Devolver</Button>
                    ) : (
                        <Button onClick={() => onDelete(_id)}>
                            <ButtonIcon w="19px">
                                <XClose />
                            </ButtonIcon>
                        </Button>
                    )}
                </ButtonContainer>
            </FlexContainer>
            <FlexContainer gap="16px" padding="16px" bg="#525252" color="#ffffff" round="8px">
                <FlexContainer width="80px">
                    <ImageContainer>
                        <Image src={album.images[0].url} alt={album.titulo} />
                    </ImageContainer>
                </FlexContainer>
                <FlexContainer width="100%" justifyContent="space-between" alignItems="center">
                    <FlexContainer column>
                        <Text fontSize="20px">{album.titulo}</Text>
                        <Text>{album.artista}</Text>
                    </FlexContainer>
                    <FlexContainer gap="80px" alignItems="center">
                        <Text fontSize="20px">${monto}</Text>
                        <Pill status={estado}>{estado}</Pill>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </LItem>
    );
};
