import { useContext } from "react";
import styled from "styled-components";
import { Button, ButtonContainer, ButtonIcon } from "../ui/Button";
import { XClose } from "../ui/svgs";
import { CartContext } from "../../contexts/CartContext";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { FlexContainer } from "../ui/FlexContainer";
import { Text } from "../ui/Text";
import { CartItem } from "../CartItem";

export const ModalWrapper = styled.aside`
    height: 100%;
    width: 33.4%;
    padding: 40px 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    top: 0;
    right: ${(props) => (props.showmodal ? "0" : "-33.4%")};
    z-index: 10;
    transition: 0.3s;
    background-color: #ffffff;
`;

const StyledLink = styled(Link)`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const CartModal = () => {
    const data = useSelector((state) => state.cart.items);
    const { showModal, setShowModal } = useContext(CartContext);

    console.log("cart", data);

    return (
        <ModalWrapper showmodal={showModal}>
            <FlexContainer gap="40px" w="100%" items="center" column>
                <Text weight="600" size="1.125rem" color="#ef4444">
                    CARRITO
                </Text>
                {data === undefined || data.length === 0 ? (
                    <div>No tienes items en tu carrito</div>
                ) : (
                    <FlexContainer gap="16px" w="100%" column>
                        {data?.map((album) => (
                            <CartItem album={album} key={album._id} />
                        ))}
                    </FlexContainer>
                )}
            </FlexContainer>
            <StyledLink to={"/checkout"}>
                <Button>Finalizar compra</Button>
            </StyledLink>
            <ButtonContainer w="max-content" h="max-content" top="20px" left="20px" absolute>
                <Button onClick={() => setShowModal(false)}>
                    <ButtonIcon>
                        <XClose />
                    </ButtonIcon>
                </Button>
            </ButtonContainer>
        </ModalWrapper>
    );
};
