import styled from "styled-components";
import { FlexContainer } from "./ui/FlexContainer";
import { Text } from "./ui/Text";

export const ErrorToast = styled.span`
    background-color: #fecaca;
    width: max-content;
    padding: 0.5rem;
    color: #b91c1c;
    border-radius: 0.5rem;
`;

export const Toast = ({ venta, album }) => {
    return (
        <FlexContainer
            gap="0.5rem"
            bg="#86efac"
            p="0.5rem 0.75rem"
            round="0.75rem"
            color="#166534"
            column
        >
            <FlexContainer gap="1rem" items="center">
                <Text size="1.125rem" weight="600">
                    Compra exitosa
                </Text>
                Orden #{venta?.ordenNumero}
            </FlexContainer>
            <FlexContainer>
                <Text size="0.85rem">
                    Compraste: {album?.titulo} de {album?.artista}
                </Text>
            </FlexContainer>
        </FlexContainer>
    );
};
