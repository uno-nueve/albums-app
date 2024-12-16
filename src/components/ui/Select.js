import styled from "styled-components";

const Select = styled.select`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    font-size: 1rem;
    background: var(--dark);
    color: var(--light);

    &:hover {
        border-color: var(--light);
    }

    &:focus {
        outline: none;
        border-color: var(--light);
    }
`;

export default Select;
