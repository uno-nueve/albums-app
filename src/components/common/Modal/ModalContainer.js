import styled from "styled-components";

export const ModalContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: saturate(180%) blur(0.625rem);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    position: absolute;
    left: 0;
    top: 0;
    visibility: ${(props) => (props.showmodal ? "visible" : "hidden")};
    opacity: ${(props) => (props.showmodal ? "100%" : "0%")};
    z-index: 10;
    transition: 0.3s;

    @media (max-width: 500px) {
        justify-content: flex-start;
    }
`;
