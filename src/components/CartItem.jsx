import { useDispatch } from "react-redux";
import { Button, ButtonContainer, ButtonIcon } from "./ui/Button";
import { FlexContainer } from "./ui/FlexContainer";
import { Image, ImageContainer } from "./ui/Image";
import { XClose } from "./ui/svgs";
import { Text } from "./ui/Text";
import { removeFromCart } from "../state/cart/cartSlice";
import styled from "styled-components";

const ItemContainer = styled(FlexContainer)`
    padding: 12px;
    background-color: #262626;
    color: #ffffff;
    border-radius: 24px;
    justify-content: space-between;
`;

export const CartItem = ({ album }) => {
    const dispatch = useDispatch();

    return (
        <ItemContainer>
            <FlexContainer w="100px">
                <ImageContainer>
                    <Image src={album.images[0].url} />
                </ImageContainer>
            </FlexContainer>
            <Text size="1.125rem">{album.titulo}</Text>
            <ButtonContainer w="max-content">
                <Button onClick={() => dispatch(removeFromCart(album._id))}>
                    <ButtonIcon>
                        <XClose />
                    </ButtonIcon>
                </Button>
            </ButtonContainer>
        </ItemContainer>
    );
};
