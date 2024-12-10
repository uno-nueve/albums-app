import { Link, useRouteError } from "react-router";
import { ArrowNarrowLeft } from "../components/ui/svgs";
import styled from "styled-components";

const IconContainer = styled.div`
    width: 20px;
    heigth: 100%;
    display: flex;
    align-items: center;
`;

const StyledLink = styled(Link)`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Lo sentimos, ocurrió un error inesperado.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <StyledLink to="/">
                <IconContainer>
                    <ArrowNarrowLeft />
                </IconContainer>
                Volver a la página principal
            </StyledLink>
        </div>
    );
};
