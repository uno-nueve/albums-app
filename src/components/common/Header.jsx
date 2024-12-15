import { Link, NavLink } from "react-router";
import styled from "styled-components";
import { Logo, MenuIcon } from "../ui/svgs";

const HeaderWrapper = styled.div`
    background-color: #262626;
    color: #ffffff;
    padding: 18px 40px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderContainer = styled.header`
    max-width: 1920px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavWrapper = styled.nav`
    display: flex;
    gap: 12px;

    @media (max-width: 480px) {
        display: none;
    }
`;

const MenuButton = styled.div`
    display: none;

    @media (max-width: 480px) {
        display: block;
        width: 32px;
    }
`;

const StyledNavLink = styled(NavLink)`
    color: #ffffff;
    transition: 0.2s;
    font-size: 1.125rem;
    padding: 8px 16px;
    border-radius: 12px;

    &:hover {
        color: #ef4444;
        background-color: #191919;
    }
`;

export const Header = ({ navLinks }) => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Link to="/">
                    <div style={{ height: "40px" }}>
                        <Logo />
                    </div>
                </Link>
                <NavWrapper>
                    {navLinks?.map(({ label, to }) => (
                        <StyledNavLink key={to} to={to}>
                            {label}
                        </StyledNavLink>
                    ))}
                </NavWrapper>
                <MenuButton>
                    <MenuIcon />
                </MenuButton>
            </HeaderContainer>
        </HeaderWrapper>
    );
};
