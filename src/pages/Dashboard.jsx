import { NavLink, Outlet, useNavigate } from "react-router";
import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Avatar, AvatarContainer, ProfileWrapper } from "../components/ui/Profile.js";

export const Dashboard = () => {
    const navigate = useNavigate();
    const user = useContext(UserContext);

    if (!user) {
        return navigate("/login");
    }

    return (
        <>
            <GridColsWrapper cols="1fr 3fr">
                <GridCol>
                    <ProfileWrapper>
                        <AvatarContainer>
                            <Avatar src={user.avatar} alt={user.username} />
                        </AvatarContainer>
                        <p>{user.username}</p>
                    </ProfileWrapper>
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
