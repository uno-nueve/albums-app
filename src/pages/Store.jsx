import { Outlet } from "react-router";
import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { CartContext } from "../contexts/CartContext";
import { CartModal } from "../components/common/CartModal";
import { useState } from "react";
import { Filters } from "../components/Filters";
import styled from "styled-components";

const ScrollCol = styled(GridCol)`
    overflow-y: scroll;
    height: calc(100vh - 80px);
`;

export const Store = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <CartContext.Provider value={{ showModal, setShowModal }}>
            <GridColsWrapper cols="1fr 3fr">
                <GridCol>
                    <Filters />
                </GridCol>
                <ScrollCol>
                    <h1>Albums</h1>
                    <Outlet />
                </ScrollCol>
                <CartModal />
            </GridColsWrapper>
        </CartContext.Provider>
    );
};
