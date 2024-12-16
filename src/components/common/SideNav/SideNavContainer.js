import styled from "styled-components";
import { FlexContainer } from "../../ui/FlexContainer";

export const SideNavContainer = styled(FlexContainer)`
    @media (max-width: 768px) {
        flex-direction: row;
        padding: 1.25rem;
        align-items: center;
        height: 80px;
    }
`;

export const NavContainer = styled(FlexContainer)`
    border-bottom: 1px solid #9e9e9e;
    border-top: 1px solid #9e9e9e;

    @media (max-width: 768px) {
        flex-direction: row;
        border-bottom: none;
        border-top: none;
        border-left: 1px solid #9e9e9e;
        border-right: 1px solid #9e9e9e;
        padding: 0;
    }
`;
