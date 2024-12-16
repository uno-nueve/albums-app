import styled from "styled-components";

const LayoutWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    @media (max-width: 500px) {
        background-color: var(--dark);
    }
`;

export default LayoutWrapper;
