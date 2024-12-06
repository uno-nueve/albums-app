import styled from "styled-components";

const Select = styled.select`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    font-size: 1rem;
    background: transparent;

    &:hover {
        border-color: black;
    }

    &:focus {
        outline: none;
    }
`;

export default Select;
