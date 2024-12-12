import { Outlet } from "react-router";
import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { CartContext } from "../contexts/CartContext";
import { SideModal } from "../components/common/SideModal";
import { useState } from "react";

export const Store = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <CartContext.Provider value={{ showModal, setShowModal }}>
            <GridColsWrapper cols="1fr 3fr">
                <GridCol>filtros</GridCol>
                <GridCol>
                    <Outlet />
                    <SideModal />
                </GridCol>
            </GridColsWrapper>
        </CartContext.Provider>
    );
};
