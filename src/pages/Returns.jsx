import styled from "styled-components";
import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { Searchbar } from "../components/common/SearchBar";

const ImageCol = styled(GridCol)`
    padding: 0;

    @media (max-width: 768px) {
        display: none;
    }
`;

const BgImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Returns = () => {
    return (
        <>
            <GridColsWrapper cols="repeat(2, minmax(0, 1fr))">
                <GridCol>
                    <Searchbar />
                </GridCol>
                <ImageCol>
                    <BgImage
                        src="https://images.unsplash.com/photo-1645378198905-bca326a21167?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="abstract blob"
                    />
                </ImageCol>
            </GridColsWrapper>
        </>
    );
};
