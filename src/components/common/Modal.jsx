import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../contexts/ModalContext";

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
    right: ${(props) => (props.showModal ? "0" : "-33.4%")};
    z-index: 10;
    transition: 0.3s;
`;

export const Modal = ({ children }) => {
    const showModal = useContext(ModalContext);
    return <ModalWrapper showModal={showModal}>{children}</ModalWrapper>;
};
