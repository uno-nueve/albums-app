import { useContext } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import { XClose } from "../ui/svgs";
import { CartContext } from "../../contexts/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../state/cart/cartSlice";
import { Link } from "react-router";

export const ModalWrapper = styled.aside`
    height: 100%;
    width: 33.4%;
    padding: 40px 20px;
    border: 1px solid black;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    top: 0;
    right: ${(props) => (props.showmodal ? "0" : "-33.4%")};
    z-index: 10;
    transition: 0.3s;
    background-color: white;
`;

const IconContainer = styled.div`
    width: 20px;
    heigth: 100%;
    display: flex;
    align-items: center;
`;

const ModalButton = styled(Button)`
    position: absolute;
    width: 40px;
    left: 20px;
    top: 20px;
`;

const StyledLink = styled(Link)`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const SideModal = () => {
    const data = useSelector((state) => state.cart);
    const { showModal, setShowModal } = useContext(CartContext);
    const dispatch = useDispatch();
    console.log("cart", data);

    return (
        <ModalWrapper showmodal={showModal}>
            <h3>Carrito</h3>
            {!data.length ? (
                <div>No tienes items en tu carrito</div>
            ) : (
                <>
                    {data.map((album) => (
                        <div key={album._id}>
                            <span>{album.titulo}</span>
                            <button onClick={() => dispatch(removeFromCart(album._id))}>X</button>
                        </div>
                    ))}
                </>
            )}
            <StyledLink to={"/checkout"}>
                <Button>Finalizar compra</Button>
            </StyledLink>
            <ModalButton onClick={() => setShowModal(false)}>
                <IconContainer>
                    <XClose />
                </IconContainer>
            </ModalButton>
        </ModalWrapper>
    );
};
