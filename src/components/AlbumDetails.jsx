import styled from "styled-components";
import { Button } from "./ui/Button";
import { FlexContainer } from "./ui/FlexContainer";
import { Image, ImageContainer } from "./ui/Image";
import { Pill } from "./ui/Pill";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useTitle } from "../hooks/useTitle";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/cart/cartSlice";

const AlbumImage = styled(Image)`
    filter: grayscale(90%);
    transition: 0.3s;

    &:hover {
        filter: none;
    }
`;

const DetailsContainer = styled(FlexContainer)`
    @media (max-width: 768px) {
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const InfoContainer = styled(FlexContainer)`
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`;

export const AlbumDetails = ({ data, location }) => {
    const { setShowModal } = useContext(CartContext);
    const dispatch = useDispatch();
    useTitle(`${data?.titulo} | ${data?.artista}`);

    const handleCart = () => {
        setShowModal(true);
        dispatch(addToCart(data));
    };

    return (
        <DetailsContainer gap="1.875rem" p="1.25rem">
            <FlexContainer maxw="420px">
                <ImageContainer>
                    <AlbumImage src={data?.images[0].url} />
                </ImageContainer>
            </FlexContainer>
            <InfoContainer justify="space-between" gap="1rem" w="320px" column>
                <FlexContainer gap="1rem" column>
                    <h1>{data?.titulo}</h1>
                    <h2>{data?.artista}</h2>
                    <p>{data?.genero}</p>
                </FlexContainer>
                <FlexContainer gap="1.5rem" items="center">
                    <Pill status={data?.estado}>{data?.estado}</Pill>
                    Stock: {data?.stock}
                </FlexContainer>
                {location.pathname.includes("/albums") ? (
                    <Button onClick={handleCart}>Añadir al carrito</Button>
                ) : (
                    <Button onClick={() => setShowModal(true)}>Editar</Button>
                )}
            </InfoContainer>
        </DetailsContainer>
    );
};
