import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.column ? "column" : "row")};
    align-items: ${(props) => props.items && props.items};
    justify-content: ${(props) => props.justify && props.justify};
    gap: ${(props) => props.gap && props.gap};
    padding: ${(props) => props.p && props.p};
    height: ${(props) => props.h && props.h};
    width: ${(props) => props.w && props.w};
    background-color: ${(props) => props.bg && props.bg};
    color: ${(props) => props.color && props.color};
    border-bottom: ${(props) => props.borderb && props.borderb};
    border-radius: ${(props) => props.round && props.round};
`;
