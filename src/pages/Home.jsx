import styled from "styled-components";
import GridColsWrapper from "../components/ui/GridColWrapper";
import GridCol from "../components/ui/GridCol";
import Button from "../components/ui/Button";
import { Link } from "react-router";
import { ArrowNarrowRight } from "../components/ui/svgs";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const InlineButton = styled(Button)`
    max-width: 320px;
    justify-content: space-between;
    font-size: 20px;
`;

const DisplayCol = styled(GridCol)`
    justify-content: space-between;
    padding: 80px 40px;
    align-items: end;

    @media (max-width: 768px) {
        grid-template-columns: minmax(0, 1fr);
        background-image: url("https://images.unsplash.com/photo-1722868453565-dfa553dacc95?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    }
`;

const ImageCol = styled(GridCol)`
    padding: 0;

    @media (max-width: 768px) {
        display: none;
    }
`;

const GridLayout = styled(GridColsWrapper)`
    @media (max-width: 768px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;

const StyledLink = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: end;
`;

const ButtonIcon = styled.div`
    width: 24px;
    height: 100%;
`;

const BgImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Home = () => {
    const user = useContext(UserContext);

    return (
        <>
            <GridLayout cols="repeat(2, minmax(0, 1fr))">
                <ImageCol>
                    <BgImage
                        src="https://images.unsplash.com/photo-1722868453565-dfa553dacc95?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="abstract blob"
                    />
                </ImageCol>
                <DisplayCol>
                    <h1>Hola Mundo</h1>
                    {user ? (
                        <StyledLink to="/dashboard">
                            <InlineButton>
                                Dashboard
                                <ButtonIcon>
                                    <ArrowNarrowRight />
                                </ButtonIcon>
                            </InlineButton>
                        </StyledLink>
                    ) : (
                        <StyledLink to="/albums">
                            <InlineButton>
                                Comprar
                                <ButtonIcon>
                                    <ArrowNarrowRight />
                                </ButtonIcon>
                            </InlineButton>
                        </StyledLink>
                    )}
                </DisplayCol>
            </GridLayout>
        </>
    );
};
