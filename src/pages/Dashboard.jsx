import { NavLink, Outlet, useNavigate } from "react-router";
import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Avatar, AvatarContainer, ProfileWrapper } from "../components/ui/Profile.js";
import { Button } from "../components/ui/Button.js";
import { ModalContext } from "../contexts/ModalContext.js";
import { Modal } from "../components/common/Modal.jsx";
import { FlexContainer } from "../components/ui/FlexContainer.js";
import { useTitle } from "../hooks/useTitle";

export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const user = useContext(UserContext) || localStorage.getItem("session");
    useTitle("Dashboard");

    if (!user) {
        return navigate("/login");
    }

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
            <FlexContainer height="calc(100vh - 80px)">
                <GridColsWrapper cols="1fr 3fr">
                    <GridCol>
                        <ProfileWrapper>
                            <AvatarContainer>
                                <Avatar src={user.avatar} alt={user.username} />
                            </AvatarContainer>
                            <p>{user.username}</p>
                        </ProfileWrapper>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                paddingBottom: "20px",
                                borderBottom: "1px solid #9e9e9e",
                            }}
                        >
                            <NavLink to="/dashboard/catalog">Catálogo</NavLink>
                            <NavLink to="/dashboard/orders">Ordenes</NavLink>
                        </div>
                        <Button onClick={() => setShowModal(true)}>Añadir album</Button>
                    </GridCol>
                    <GridCol>
                        <Outlet />
                        <Modal />
                    </GridCol>
                </GridColsWrapper>
            </FlexContainer>
        </ModalContext.Provider>
    );
};
