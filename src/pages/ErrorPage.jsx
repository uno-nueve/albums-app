import { useRouteError } from "react-router";
import { ArrowNarrowLeft } from "../components/ui/svgs";
import styled from "styled-components";
import { FlexContainer } from "../components/ui/FlexContainer";
import { ToastedLink } from "../components/ui/Link";

const IconContainer = styled.div`
    width: 20px;
    heigth: 100%;
    display: flex;
    align-items: center;
`;

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <FlexContainer
            id="error-page"
            column
            items="center"
            justify="center"
            h="100vh"
            gap="1rem"
            bg="#262626"
            color="#ffffff"
        >
            <h1>☹️</h1>
            <p>Lo sentimos, ocurrió un error inesperado.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <ToastedLink to="/">
                <IconContainer>
                    <ArrowNarrowLeft />
                </IconContainer>
                Volver a la página principal
            </ToastedLink>
        </FlexContainer>
    );
};
