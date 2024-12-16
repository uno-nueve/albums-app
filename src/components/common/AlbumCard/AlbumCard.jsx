import { useLocation } from "react-router";
import { Button } from "../../ui/Button";
import { Image, ImageContainer } from "../../ui/Image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../state/cart/cartSlice";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { Text } from "../../ui/Text";
import { FlexContainer } from "../../ui/FlexContainer";
import { StyledLink } from "../../ui/Link";
import { CardContainer } from "./CardContainer";

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
                    <FlexContainer gap="0.5rem" column>
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
            <StyledLink to={`/dashboard/catalog/${_id}`}>
                <FlexContainer gap="1rem" padding="0.5rem" column>
                    <ImageContainer>
                        <Image src={images[0].url} alt={titulo} />
                    </ImageContainer>
                    <div>
                        <Text weight="600">{titulo}</Text>
                        <Text color="#737373">{artista}</Text>
                    </div>
                </FlexContainer>
            </StyledLink>
        </CardContainer>
    );
};
