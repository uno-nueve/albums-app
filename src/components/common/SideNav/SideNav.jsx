import styled from "styled-components";
import { Button, ButtonIcon } from "../../ui/Button";
import { Avatar, AvatarContainer, ProfileText, ProfileWrapper } from "../../ui/Profile";
import { Plus } from "../../ui/svgs";
import { StyledNavLink } from "../../ui/Link";
import { NavContainer, SideNavContainer } from "./SideNavContainer";

const DynamicText = styled.p`
    @media (max-width: 800px) {
        display: none;
    }
`;

export const SideNav = ({ user, setShowModal, location }) => {
    return (
        <SideNavContainer p="20px 40px" bg="var(--dark)" color="var(--light)" gap="20px" column>
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
