import styled from "styled-components";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { Searchbar } from "../components/common/SearchBar";
import { FlexContainer } from "../components/ui/FlexContainer";
import { useTitle } from "../hooks/useTitle";

const ImageCol = styled(FlexContainer)`
    padding: 0;

    @media (max-width: 1080px) {
        display: none;
    }
`;

const BgImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const GridLayout = styled(GridColsWrapper)`
    @media (max-width: 1080px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;

export const Returns = () => {
    useTitle("Devoluciones");
    return (
        <FlexContainer h="calc(100vh - 80px)">
            <GridLayout cols="repeat(2, minmax(0, 1fr))">
                <FlexContainer gap="1.25rem" p="1.25rem" column>
                    <FlexContainer p="0 1.25rem">
                        <h1>DEVOLUCIONES</h1>
                    </FlexContainer>
                    <Searchbar />
                </FlexContainer>
                <ImageCol>
                    <BgImage
                        src="https://images.unsplash.com/photo-1633164442172-dc4147f21954?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="abstract blob"
                    />
                </ImageCol>
            </GridLayout>
        </FlexContainer>
    );
};
