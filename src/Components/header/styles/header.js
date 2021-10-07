import styled from "styled-components/macro";
import { Link } from "react-scroll";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 2rem 0;

	@media ${(props) => props.theme.breakpoints.md} {
        padding: 0 2rem;
    }
`;

export const Logo = styled.h2`
	color: var(--color-text);
	cursor: pointer;

	:hover{
		transform: scale(1.1);
	}
`;

export const NavLink = styled.nav`
	display: flex;
	flex-direction: row;
	gap: 2rem;
	justify-content: space-between;

	h3 {
		color: var(--color-text);
	}

	@media ${(props) => props.theme.breakpoints.md} {
        display: none;
    }
`;

export const LinkS = styled(Link)`
	color: var(--color-text);
    font-size: 1.6rem;
    font-weight: 600;
	:hover{
		transform: scale(1.1);
	}

	&.active {
		color: var(--color-background2);
	}

	:hover{
		color: var(--color-background2);
	}
`;

export const Btn = styled.div`
	display: none;
	font-size: 4rem;
	color: var(--color-text);
	cursor: pointer;
	transition: all 0.2s linear;

	:hover{
		transform: scale(1.1);
	}

	.ro {
		transform: rotate(180deg);
	}

	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;

		.fa-times {
			transform: rotate(180deg);
		}
	}
`;

export const Asidebar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 100vw;
	height: ${props => props.isOpen ? '100vh' : '0rem'} ;
	position: fixed;
	top: 0;
	left: 0;
	background-color: var(--color-primary);
	z-index: 2000;
	transition: height 0.5s linear;
	overflow: hidden;
`;
