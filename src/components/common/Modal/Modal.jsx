import { XClose } from "../../ui/svgs";
import { Button, ButtonContainer, ButtonIcon } from "../../ui/Button";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import { FlexContainer } from "../../ui/FlexContainer";
import { ModalContainer } from "./ModalContainer";

export const Modal = ({ children }) => {
    const { showModal, setShowModal } = useContext(ModalContext);

    return (
        <ModalContainer showmodal={showModal}>
            <FlexContainer>
                {children}
                <ButtonContainer
                    w="max-content"
                    h="max-content"
                    top="1.25rem"
                    left="1.25rem"
                    absolute
                >
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
