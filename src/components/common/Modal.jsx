import styled from "styled-components";
import { XClose } from "../ui/svgs";
import { NewAlbumForm } from "../NewAlbumForm";
import { Button, ButtonContainer, ButtonIcon } from "../ui/Button";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { FlexContainer } from "../ui/FlexContainer";

const ModalContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: saturate(180%) blur(10px);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

    &:backdrop {
        background: tomato;
    }
`;

export const Modal = () => {
    const { showModal, setShowModal } = useContext(ModalContext);

    return (
        <ModalContainer showmodal={showModal}>
            <FlexContainer>
                <NewAlbumForm />
                <ButtonContainer w="max-content" h="max-content" top="20px" left="20px" absolute>
                    <Button onClick={() => setShowModal(false)}>
                        <ButtonIcon>
                            <XClose />
                        </ButtonIcon>
                    </Button>
                </ButtonContainer>
            </FlexContainer>
        </ModalContainer>
    );
};
