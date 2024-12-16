import styled from "styled-components";

export const ModalWrapper = styled.div`
    height: 100%;
    width: ${(props) => (props.showmodal ? "33.4%" : "0")};
    visibility: ${(props) => (props.showmodal ? "visible" : "hidden")};
    opacity: ${(props) => (props.showmodal ? "1" : "0")};
    padding: 2.5rem 1.25rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    top: 0;
    right: ${(props) => (props.showmodal ? "0" : "1.5rem")};
    z-index: 10;
    transition: 0.3s;
    background-color: #fafafa;

    @media (max-width: 1028px) {
        width: ${(props) => (props.showmodal ? "50%" : "0")};
    }

    @media (max-width: 880px) {
        width: ${(props) => (props.showmodal ? "75%" : "0")};
    }

    @media (max-width: 768px) {
        width: ${(props) => (props.showmodal ? "100%" : "0")};
    }
`;
