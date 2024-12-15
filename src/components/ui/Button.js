import styled from "styled-components";

export const Button = styled.button`
    max-height: 40px;
    display: inline-flex;
    padding: 8px 16px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    color: black;
    border: none;
    font-weight: 400;
    font-size: 1rem;

    &:hover {
        background-color: black;
        color: white;
    }
`;

export const ButtonIcon = styled.div`
    width: ${(props) => (props.w ? props.w : "19px")};
    height: ${(props) => (props.h ? props.h : "19px")};
`;

export const ButtonContainer = styled.div`
    min-width: ${(props) => (props.minw ? props.minw : "19px")};
    width: ${(props) => (props.w ? props.w : "19px")};
    height: ${(props) => (props.h ? props.h : "19px")};
`;
