import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";

export const Returns = () => {
    return (
        <>
            <GridColsWrapper cols="repeat(2, minmax(0, 1fr))">
                <GridCol>searchbar</GridCol>
                <GridCol>img</GridCol>
            </GridColsWrapper>
        </>
    );
};
