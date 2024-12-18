import styled from "styled-components";

export const Text = styled.p`
    font-size: ${(props) => (props.size ? props.size : "1rem")};
    font-weight: ${(props) => (props.weight ? props.weight : "400")};
    color: ${(props) => props.color && props.color};
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

export const ErrorText = styled.p`
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
    color: red;
    width: 100%;
`;

export const Heading1 = styled.h1`
    font-size: 3rem;
`;

export const Heading2 = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
`;
