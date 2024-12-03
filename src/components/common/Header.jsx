import { Link, NavLink } from "react-router";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    border: 1px solid black;
    background-color: white;
    color: black;
    padding: 18px 40px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavWrapper = styled.nav`
    display: flex;
    gap: 20px;
`;

export const Header = ({ navLinks }) => {
    return (
        <HeaderWrapper>
            <Link to="/">LOGO</Link>
            <NavWrapper>
                {navLinks?.map(({ label, to }) => (
                    <NavLink key={to} to={to}>
                        {label}
                    </NavLink>
                ))}
            </NavWrapper>
        </HeaderWrapper>
    );
};