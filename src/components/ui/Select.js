import styled from "styled-components";

const Select = styled.select`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    font-size: 1rem;
    background: #262626;
    color: #ffffff;

    &:hover {
        border-color: #ffffff;
    }

    &:focus {
        outline: none;
        border-color: #ffffff;
    }
`;

export default Select;
