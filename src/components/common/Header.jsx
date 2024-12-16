import { Link, NavLink } from "react-router";
import styled from "styled-components";
import { Logo, MenuIcon } from "../ui/svgs";
import { useState } from "react";

const HeaderWrapper = styled.div`
    background-color: #262626;
    color: #ffffff;
    padding: 18px 40px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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

    @media (max-width: 768px) {
        display: none;
    }
`;

const MenuButton = styled.div`
    display: none;

    @media (max-width: 768px) {
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

const MobileNav = styled.div`
    height: ${(props) => (props.showmodal ? "calc(100vh - 80px)" : "0")};
    width: 100%;
    background-color: #262626;
    visibility: ${(props) => (props.showmodal ? "visible" : "hidden")};
    opacity: ${(props) => (props.showmodal ? "1" : "0")};
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 50;
    display: none;
    padding: 20px;
    transition: 0.3s;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 8px;
    }
`;

export const Header = ({ navLinks }) => {
    const [showModal, setShowModal] = useState(false);

    const handleNavigate = () => {
        setTimeout(() => setShowModal(false), 300);
    };

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Link to="/" style={{ width: "140px" }}>
                    <Logo />
                </Link>
                <NavWrapper>
                    {navLinks?.map(({ label, to }) => (
                        <StyledNavLink key={to} to={to}>
                            {label}
                        </StyledNavLink>
                    ))}
                </NavWrapper>
                <MenuButton onClick={() => setShowModal(!showModal)}>
                    <MenuIcon />
                </MenuButton>
                <MobileNav showmodal={showModal}>
                    {navLinks?.map(({ label, to }) => (
                        <StyledNavLink key={to} to={to} onClick={handleNavigate}>
                            {label}
                        </StyledNavLink>
                    ))}
                </MobileNav>
            </HeaderContainer>
        </HeaderWrapper>
    );
};
