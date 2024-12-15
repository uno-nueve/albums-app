import styled from "styled-components";
import { Button } from "../ui/Button";
import { FlexContainer } from "../ui/FlexContainer";
import { Avatar, AvatarContainer, ProfileWrapper } from "../ui/Profile";
import { NavLink } from "react-router";

const StyledNavLink = styled(NavLink)`
    color: #ffffff;
    transition: 0.2s;
    font-size: 1.125rem;
    padding: 8px 16px;
    border-radius: 12px;

    &:hover {
        color: #ef4444;
    }
`;

export const SideNav = ({ user, setShowModal, location }) => {
    return (
        <FlexContainer p="20px 40px" bg="#262626" color="#ffffff" gap="20px" column>
            <ProfileWrapper>
                <AvatarContainer>
                    <Avatar src={user.avatar} alt={user.username} />
                </AvatarContainer>
                <p>{user.username}</p>
            </ProfileWrapper>
            <FlexContainer gap="8px" p="0 0 20px 0" borderb="1px solid #9e9e9e " column>
                <StyledNavLink
                    to="/dashboard/catalog"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Catálogo
                </StyledNavLink>
                <StyledNavLink
                    to="/dashboard/orders"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Ordenes
                </StyledNavLink>
            </FlexContainer>
            {location.pathname !== "/dashboard/orders" && (
                <Button onClick={() => setShowModal(true)}>Añadir album</Button>
            )}
        </FlexContainer>
    );
};
