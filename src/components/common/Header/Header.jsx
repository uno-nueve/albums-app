import { Link } from "react-router";
import { Logo, MenuIcon } from "../../ui/svgs";
import { useState } from "react";
import { StyledNavLink } from "../../ui/Link";
import { MenuButton, MobileNav, NavWrapper } from "./Nav";
import { HeaderContainer, HeaderWrapper } from "./HeaderWrapper";

export const Header = ({ navLinks }) => {
    const [showModal, setShowModal] = useState(false);

    const handleNavigate = () => {
        setTimeout(() => setShowModal(false), 300);
    };

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Link to="/" style={{ width: "140px" }}>
                    <Logo fill={"var(--light)"} />
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
