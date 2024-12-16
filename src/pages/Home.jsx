import styled from "styled-components";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { Button, ButtonIcon } from "../components/ui/Button";
import { Link } from "react-router";
import { ArrowNarrowRight } from "../components/ui/svgs";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { FlexContainer } from "../components/ui/FlexContainer";
import { useTitle } from "../hooks/useTitle";

const InlineButton = styled(Button)`
    max-width: 320px;
    justify-content: space-between;
    font-size: 20px;
`;

const DisplayCol = styled(FlexContainer)`
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 40px;
    align-items: end;

    @media (max-width: 768px) {
        grid-template-columns: minmax(0, 1fr);
        background-image: url("/photo-1722868453565-dfa553dacc95.jpg");
    }
`;

const ImageCol = styled(FlexContainer)`
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

const BgImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Home = () => {
    const user = useContext(UserContext);
    useTitle("Viniltory");
    return (
        <FlexContainer h="calc(100vh - 80px)">
            <GridLayout cols="repeat(2, minmax(0, 1fr))">
                <ImageCol>
                    <BgImage src="/photo-1722868453565-dfa553dacc95.jpg" alt="abstract blob" />
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
        </FlexContainer>
    );
};
