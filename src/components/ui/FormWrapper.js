import styled from "styled-components";

const FormWrapper = styled.form`
    padding: 24px;
    display: flex;
    width: 100%;
    min-width: 500px;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--dark);
    color: var(--light);
    border-radius: 24px;
    position: relative;
`;

export default FormWrapper;
