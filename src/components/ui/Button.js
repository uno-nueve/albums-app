import styled from "styled-components";

export const Button = styled.button`
    max-height: 40px;
    display: inline-flex;
    padding: 12px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    color: black;
    border: none;
    border-radius: 12px;
    font-weight: 400;
    font-size: 1rem;
    transition: 0.3s;
    cursor: pointer;
    gap: 8px;

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
    max-width: ${(props) => props.maxw && props.maxw};
    width: ${(props) => (props.w ? props.w : "19px")};
    height: ${(props) => (props.h ? props.h : "19px")};
    position: ${(props) => props.absolute && "absolute"};
    top: ${(props) => props.top && props.top};
    right: ${(props) => props.right && props.right};
    bottom: ${(props) => props.bottom && props.bottom};
    left: ${(props) => props.left && props.left};
`;
