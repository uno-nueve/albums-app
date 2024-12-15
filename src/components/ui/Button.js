import styled from "styled-components";

const Button = styled.button`
    height: 40px;
    padding: 10px;
    display: inline-flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    border: 1px solid black;
    font-weight: 400;
    font-size: 1rem;

    &:hover {
        background-color: black;
        color: white;
    }
`;

export default Button;
