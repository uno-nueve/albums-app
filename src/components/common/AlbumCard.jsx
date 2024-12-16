import { Link, useLocation } from "react-router";
import { Button } from "../ui/Button";
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
    padding: 16px;
    border: 1px solid transparent;
    border-radius: 24px;

    &:hover {
        filter: none;
        border: 1px solid #e5e5e5;
        background: linear-gradient(transparent, #f5f5f5);
    }
`;

const StyledLink = styled(Link)`
    color: #ef4444;
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
                <StyledLink to={`/albums/${_id}`}>
                    <FlexContainer gap="8px" column>
                        <ImageContainer>
                            <Image src={images[0].url} alt={titulo} />
                        </ImageContainer>
                        <div>
                            <Text weight="600">{titulo}</Text>
                            <Text color="#737373">{artista}</Text>
                        </div>
                    </FlexContainer>
                </StyledLink>
                <Button onClick={handleCart}>Añadir al carrito</Button>
            </CardContainer>
        );
    }

    return (
        <CardContainer>
            <Link to={`/dashboard/catalog/${_id}`}>
                <FlexContainer gap="16px" padding="8px" column>
                    <ImageContainer>
                        <Image src={images[0].url} alt={titulo} />
                    </ImageContainer>
                    <div>
                        <Text weight="600" fontSize="1.25rem">
                            {titulo}
                        </Text>
                        <Text color="#737373">{artista}</Text>
                    </div>
                </FlexContainer>
            </Link>
        </CardContainer>
    );
};
