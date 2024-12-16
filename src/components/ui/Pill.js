import styled from "styled-components";

export const Pill = styled.div`
    height: max-content;
    text-align: center;
    padding: 8px 16px;
    border-radius: 16px;
    background-color: ${(props) =>
        props.status === "Devuelto" || props.status === "Agotado" ? "#b91c1c" : "#047857"};
    color: white;
`;
