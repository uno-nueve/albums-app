import { Link, useLocation } from "react-router";
import Button from "../ui/Button";
import { Image, ImageContainer } from "../ui/Image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/cart/cartSlice";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Text } from "../ui/Text";
import { FlexContainer } from "../ui/FlexContainer";
import styled from "styled-components";

const CardContainer = styled(FlexContainer)`
    filter: grayscale(90%);
    transition: 0.3s;
    flex-direction: column;
    gap: 16px;
    padding: 8px;

    &:hover {
        filter: none;
    }
`;

export const AlbumCard = ({ album }) => {
    const { titulo, artista, images, _id } = album;
    const { setShowModal } = useContext(CartContext) || {};
    const location = useLocation();
    const dispatch = useDispatch();

    const handleCart = () => {
        setShowModal(true);
        dispatch(addToCart(album));
    };

    if (location.pathname === "/albums") {
        return (
            <CardContainer>
                <Link to={`/albums/${_id}`} style={{ width: "100%", height: "100%" }}>
                    <FlexContainer gap="8px" column>
                        <ImageContainer>
                            <Image src={images[0].url} alt={titulo} />
                        </ImageContainer>
                        <div>
                            <Text fontWeight="600">{titulo}</Text>
                            <Text color="#737373">{artista}</Text>
                        </div>
                    </FlexContainer>
                </Link>
                <Button onClick={handleCart}>Añadir al carrito</Button>
            </CardContainer>
        );
    }

    return (
        <Link to={`/dashboard/catalog/${_id}`} style={{ width: "100%", height: "100%" }}>
            <FlexContainer gap="16px" padding="8px" column>
                <ImageContainer>
                    <Image src={images[0].url} alt={titulo} />
                </ImageContainer>
                <div>
                    <Text fontWeight="600" fontSize="1.25rem">
                        {titulo}
                    </Text>
                    <Text color="#737373">{artista}</Text>
                </div>
            </FlexContainer>
        </Link>
    );
};
