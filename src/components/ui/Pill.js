import styled from "styled-components";

export const Pill = styled.div`
    height: max-content;
    text-align: center;
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    background-color: ${(props) =>
        props.status === "Devuelto" || props.status === "Agotado" ? "#b91c1c" : "#047857"};
    color: white;
`;
