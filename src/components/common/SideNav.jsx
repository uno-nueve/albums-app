import styled from "styled-components";
import { Button, ButtonIcon } from "../ui/Button";
import { FlexContainer } from "../ui/FlexContainer";
import { Avatar, AvatarContainer, ProfileWrapper } from "../ui/Profile";
import { NavLink } from "react-router";
import { Plus } from "../ui/svgs";

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

const SideNavContainer = styled(FlexContainer)`
    @media (max-width: 768px) {
        flex-direction: row;
        padding: 20px;
        align-items: center;
    }
`;

const NavContainer = styled(FlexContainer)`
    border-bottom: 1px solid #9e9e9e;
    border-top: 1px solid #9e9e9e;

    @media (max-width: 768px) {
        flex-direction: row;
        border-bottom: none;
        border-top: none;
        border-left: 1px solid #9e9e9e;
        border-right: 1px solid #9e9e9e;
        width: 100%;
    }
`;

const DynamicText = styled.p`
    @media (max-width: 80px) {
        display: none;
    }
`;

const ProfileText = styled.p`
    @media (max-width: 768px) {
        display: none;
    }
`;

export const SideNav = ({ user, setShowModal, location }) => {
    return (
        <SideNavContainer p="20px 40px" bg="#262626" color="#ffffff" gap="20px" column>
            <ProfileWrapper>
                <AvatarContainer>
                    <Avatar src={user.avatar} alt={user.username} />
                </AvatarContainer>
                <ProfileText>{user.username}</ProfileText>
            </ProfileWrapper>
            <NavContainer gap="8px" p="20px 0" column>
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
            </NavContainer>
            {location.pathname !== "/dashboard/orders" && (
                <Button onClick={() => setShowModal(true)}>
                    <DynamicText>Añadir album</DynamicText>
                    <ButtonIcon w="max-content">
                        <Plus />
                    </ButtonIcon>
                </Button>
            )}
        </SideNavContainer>
    );
};
