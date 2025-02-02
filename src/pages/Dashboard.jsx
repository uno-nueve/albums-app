import { Outlet, useLocation, useNavigate } from "react-router";
import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { ModalContext } from "../contexts/ModalContext";
import { Modal } from "../components/common/Modal/Modal";
import { FlexContainer } from "../components/ui/FlexContainer";
import { useTitle } from "../hooks/useTitle";
import { CartContext } from "../contexts/CartContext";
import { SideNav } from "../components/common/SideNav/SideNav";
import styled from "styled-components";
import { NewAlbumForm } from "../components/NewAlbumForm";

const ScrollCol = styled(GridCol)`
    border: none;
    overflow-y: scroll;
    height: calc(100vh - 80px);

    @media (max-width: 768px) {
        height: calc(100vh - 160px);
    }
`;

const GridLayout = styled(GridColsWrapper)`
    @media (max-width: 768px) {
        grid-template-columns: minmax(0, 1fr);
        height: 100%;
    }
`;

export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const user = useContext(UserContext) || localStorage.getItem("session");
    const location = useLocation();
    useTitle("Dashboard");

    if (!user) {
        return navigate("/login");
    }

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
            <CartContext.Provider value={{ showModal, setShowModal }}>
                <FlexContainer h="calc(100vh - 80px)">
                    <GridLayout cols="1fr 3fr">
                        <SideNav setShowModal={setShowModal} user={user} location={location} />
                        <FlexContainer>
                            <ScrollCol>
                                <Outlet />
                            </ScrollCol>
                            <Modal>
                                <NewAlbumForm />
                            </Modal>
                        </FlexContainer>
                    </GridLayout>
                </FlexContainer>
            </CartContext.Provider>
        </ModalContext.Provider>
    );
};
