import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../contexts/ModalContext";
import Button from "../ui/Button";
import { XClose } from "../ui/svgs";
import { ModalForm } from "../ModalForm";

export const ModalWrapper = styled.div`
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

export const Modal = () => {
    const { showModal, setShowModal } = useContext(ModalContext);
    return (
        <ModalWrapper showmodal={showModal}>
            <ModalForm />
            <ModalButton onClick={() => setShowModal(false)}>
                <IconContainer>
                    <XClose />
                </IconContainer>
            </ModalButton>
        </ModalWrapper>
    );
};
