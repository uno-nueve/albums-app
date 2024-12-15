import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.column ? "column" : "row")};
    align-items: ${(props) => props.alignItems && props.alignItems};
    justify-content: ${(props) => props.justifyContent && props.justifyContent};
    gap: ${(props) => props.gap && props.gap};
    padding: ${(props) => props.padding && props.padding};
    height: ${(props) => props.height && props.height};
    width: ${(props) => props.width && props.width};
    background-color: ${(props) => props.bg && props.bg};
    color: ${(props) => props.color && props.color};
    border-radius: ${(props) => props.round && props.round};
`;
