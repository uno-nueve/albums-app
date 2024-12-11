import { NavLink, Outlet, useNavigate } from "react-router";
import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Avatar, AvatarContainer, ProfileWrapper } from "../components/ui/Profile.js";
import Button from "../components/ui/Button.js";
import { SideModal } from "../components/common/SideModal";
import { ModalContext } from "../contexts/ModalContext.js";

export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const user = useContext(UserContext) || localStorage.getItem("session");

    if (!user) {
        return navigate("/login");
    }

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
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
                    <SideModal />
                </GridCol>
            </GridColsWrapper>
        </ModalContext.Provider>
    );
};
