import { useContext } from "react";
import styled from "styled-components";
import { Button, ButtonContainer, ButtonIcon } from "../../ui/Button";
import { XClose } from "../../ui/svgs";
import { CartContext } from "../../../contexts/CartContext";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { FlexContainer } from "../../ui/FlexContainer";
import { Text } from "../../ui/Text";
import { CartItem } from "../../CartItem";
import { ModalWrapper } from "./ModalWrapper";

const StyledLink = styled(Link)`
    width: 100%;
    display: flex;
    gap: 0.625rem;
    align-items: center;
`;

export const CartModal = () => {
    const data = useSelector((state) => state.cart.items);
    const { showModal, setShowModal } = useContext(CartContext);

    return (
        <ModalWrapper showmodal={showModal}>
            <FlexContainer gap="2.5rem" w="100%" items="center" column>
                <Text weight="600" size="1.125rem" color="var(--accent)">
                    CARRITO
                </Text>
                {data === undefined || data.length === 0 ? (
                    <div>No tienes items en tu carrito</div>
                ) : (
                    <FlexContainer gap="1rem" w="100%" column>
                        {data?.map((album) => (
                            <CartItem album={album} key={album._id} />
                        ))}
                    </FlexContainer>
                )}
            </FlexContainer>
            <StyledLink to={"/checkout"}>
                <Button>Finalizar compra</Button>
            </StyledLink>
            <ButtonContainer w="max-content" h="max-content" top="1.25rem" left="1.25rem" absolute>
                <Button onClick={() => setShowModal(false)}>
                    <ButtonIcon>
                        <XClose />
                    </ButtonIcon>
                </Button>
            </ButtonContainer>
        </ModalWrapper>
    );
};
