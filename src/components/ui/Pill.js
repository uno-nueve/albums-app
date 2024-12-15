import styled from "styled-components";

export const Pill = styled.div`
    text-align: center;
    paddind: 8px 16px;
    border-radius: 8px;
    background-color: ${(props) => (props.status === "Devuelto" ? "#b91c1c" : "#047857")};
    color: white;
`;
