import styled from "styled-components";

export const NavWrapper = styled.nav`
    display: flex;
    gap: 0.75rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const MenuButton = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        width: 2rem;
    }
`;

export const MobileNav = styled.div`
    height: ${(props) => (props.showmodal ? "calc(100vh - 80px)" : "0")};
    width: 100%;
    background-color: #262626;
    visibility: ${(props) => (props.showmodal ? "visible" : "hidden")};
    opacity: ${(props) => (props.showmodal ? "1" : "0")};
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 50;
    display: none;
    padding: 1.25rem;
    transition: 0.3s;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.5rem;
    }
`;
