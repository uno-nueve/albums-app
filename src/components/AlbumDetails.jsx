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

export const AlbumDetails = ({ data, location }) => {
    const { setShowModal } = useContext(CartContext);
    const dispatch = useDispatch();
    useTitle(`${data?.titulo} | ${data?.artista}`);

    const handleCart = () => {
        setShowModal(true);
        dispatch(addToCart(data));
    };

    return (
        <FlexContainer gap="30px">
            <FlexContainer w="500px">
                <ImageContainer>
                    <AlbumImage src={data?.images[0].url} />
                </ImageContainer>
            </FlexContainer>
            <FlexContainer justify="space-between" w="320px" column>
                <FlexContainer gap="16px" column>
                    <h1>{data?.titulo}</h1>
                    <h2>{data?.artista}</h2>
                    <p>{data?.genero}</p>
                </FlexContainer>
                <FlexContainer gap="24px" items="center">
                    <Pill status={data?.estado}>{data?.estado}</Pill>
                    Stock: {data?.stock}
                </FlexContainer>
                {location.pathname.includes("/albums") ? (
                    <Button onClick={handleCart}>Añadir al carrito</Button>
                ) : (
                    <Button onClick={() => setShowModal(true)}>Editar</Button>
                )}
            </FlexContainer>
        </FlexContainer>
    );
};
