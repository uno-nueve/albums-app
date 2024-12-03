import styled from "styled-components";
import GridColsWrapper from "../components/ui/GridColWrapper";
import GridCol from "../components/ui/GridCol";
import Button from "../components/ui/Button";
import { Link } from "react-router";
import { ArrowNarrowRight } from "../components/ui/svgs";

const InlineButton = styled(Button)`
    width: 50%;
    justify-content: space-between;
    font-size: 20px;
`;

const DisplayCol = styled(GridCol)`
    justify-content: space-between;
    padding: 80px 40px;
`;

export const Home = () => {
    return (
        <>
            <GridColsWrapper cols="repeat(2, minmax(0, 1fr))">
                <GridCol>img</GridCol>
                <DisplayCol>
                    <h1 style={{ textAlign: "right" }}>Hola Mundo</h1>
                    <Link to="/albums" style={{ display: "flex", justifyContent: "flex-end" }}>
                        <InlineButton>
                            Comprar
                            <div style={{ width: "24px", display: "flex", alignItems: "center" }}>
                                <ArrowNarrowRight />
                            </div>
                        </InlineButton>
                    </Link>
                </DisplayCol>
            </GridColsWrapper>
        </>
    );
};
