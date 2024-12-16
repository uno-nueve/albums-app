import styled from "styled-components";
import { FlexContainer } from "../../ui/FlexContainer";

export const CardContainer = styled(FlexContainer)`
    filter: grayscale(100%);
    transition: 0.3s;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;

    &:hover {
        filter: none;
    }
`;
