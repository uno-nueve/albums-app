import { NavLink } from "react-router";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    border: 1px solid black;
    background-color: white;
    color: black;
    padding: 18px 40px;
    display: flex;
    justify-content: space-between;
`;

const NavWrapper = styled.nav`
    display: flex;
    gap: 20px;
`;

export const Header = () => {
    return (
        <HeaderWrapper>
            <div>LOGO</div>
            <NavWrapper>
                <NavLink to="/catalog">Catálogo</NavLink>
                <NavLink to="/returns">Devoluciones</NavLink>
                <NavLink to="/about-us">Sobre Nosotros</NavLink>
            </NavWrapper>
        </HeaderWrapper>
    );
};
