import { Outlet } from "react-router";
import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";

export const Store = () => {
    return (
        <>
            <GridColsWrapper cols="1fr 3fr">
                <GridCol>filtros</GridCol>
                <GridCol>
                    <Outlet />
                </GridCol>
            </GridColsWrapper>
        </>
    );
};
