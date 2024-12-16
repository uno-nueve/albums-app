import { Link, NavLink } from "react-router";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    color: #ef4444;
`;

export const StyledNavLink = styled(NavLink)`
    color: #ffffff;
    transition: 0.2s;
    font-size: 1.125rem;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;

    &:hover {
        color: #ef4444;
    }
`;

export const ToastedLink = styled(Link)`
    width: max-content;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    color: #ef4444;
    transition: 0.3s;
    padding: 0.75rem;
    border-radius: 0.75rem;

    &:hover {
        background-color: #ef4444;
        color: #262626;
    }
`;
