import { Outlet } from "react-router";
import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { CartContext } from "../contexts/CartContext";
import { CartModal } from "../components/common/CartModal";
import { useState } from "react";
import { Filters } from "../components/Filters";
import { useTitle } from "../hooks/useTitle";
import styled from "styled-components";
import { FlexContainer } from "../components/ui/FlexContainer";

const ScrollCol = styled(GridCol)`
    border: none;
    overflow-y: scroll;
    height: calc(100vh - 80px);
`;

export const Store = () => {
    useTitle("Albums");
    const [showModal, setShowModal] = useState(false);

    return (
        <CartContext.Provider value={{ showModal, setShowModal }}>
            <GridColsWrapper cols="1fr 3fr">
                <FlexContainer p="20px 40px" bg="#262626" color="#ffffff" column>
                    <Filters />
                </FlexContainer>
                <ScrollCol>
                    <Outlet />
                </ScrollCol>
                <CartModal />
            </GridColsWrapper>
        </CartContext.Provider>
    );
};
