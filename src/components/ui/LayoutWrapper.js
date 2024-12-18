import styled from "styled-components";
import { FlexContainer } from "./FlexContainer";

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

export const DisplayCol = styled(FlexContainer)`
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 40px;
    align-items: end;
    height: calc(100vh - 80px);

    @media (max-width: 768px) {
        grid-template-columns: minmax(0, 1fr);
        background-image: url("https://images.unsplash.com/photo-1653560418645-ae0083c0f83e?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    }
`;

export const ImageCol = styled(FlexContainer)`
    padding: 0;

    @media (max-width: 768px) {
        display: none;
    }
`;

export default LayoutWrapper;
