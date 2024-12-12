import styled from "styled-components";
import { XClose } from "../ui/svgs";
import { NewAlbumForm } from "../NewAlbumForm";
import Button from "../ui/Button";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const ModalContainer = styled.div`
    background-color: white;
    border: 1px solid black;
    width: 100%;
    max-width: 520px;
    height: 100%;
    max-height: 640px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    visibility: ${(props) => (props.showmodal ? "visible" : "hidden")};
    opacity: ${(props) => (props.showmodal ? "100%" : "0%")};
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
        <ModalContainer showmodal={showModal}>
            <NewAlbumForm />
            <ModalButton onClick={() => setShowModal(false)}>
                <IconContainer>
                    <XClose />
                </IconContainer>
            </ModalButton>
        </ModalContainer>
    );
};
