import { NavLink, Outlet } from "react-router";
import { Header } from "../components/common/Header";
import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";

export const Dashboard = () => {
    return (
        <>
            <Header />
            <GridColsWrapper cols="1fr 3fr">
                <GridCol>
                    <NavLink to="/dashboard/catalog">Catálogo</NavLink>
                    <NavLink to="/dashboard/orders">Ordenes</NavLink>
                </GridCol>
                <GridCol>
                    <Outlet />
                </GridCol>
            </GridColsWrapper>
        </>
    );
};
