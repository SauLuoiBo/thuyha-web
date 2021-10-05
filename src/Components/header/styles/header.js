import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
`

export const Logo = styled.h1`
    color: var(--color-text);
`

export const NavLink = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;

    h3 {
        color: var(--color-text);
    }

    /* @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    } */
    
`