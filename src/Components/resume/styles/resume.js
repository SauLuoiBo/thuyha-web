import styled from "styled-components/macro";

export const Wrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 2fr;

	@media ${(props) => props.theme.breakpoints.lg} {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Bullets = styled.div`
	position: relative;
	text-align: left;
	z-index: 999;
	color: yellow;
	z-index: 999;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 15px 0 9px -15px #1f2235;
	height: 36rem;
    padding: 4rem 0;

	::before {
		content: "";
		position: absolute;
		height: 100%;
		width: 4rem;
		left: 0;
		top: 0;
		background-color: var(--color-primary);
		z-index: -1;
	}
`;

export const Details = styled.div`
	height: 36rem;
	width: 100%;
	overflow: hidden;
    padding-left: 8rem;

    @media ${(props) => props.theme.breakpoints.lg} {
		padding-left: 0rem;
	}
`;

export const NavLink = styled.div`
	display: flex;
	/* flex-direction: row; */
	gap: 2rem;
	margin: 0rem 1rem;
	padding: 1rem 0;
    height: 40px;
	color: ${props => props.active ? `var(--color-text)` : 'var(--color-primary)' };
	cursor: pointer;
	align-items: center;
	width: ${props => props.active ? '90%' : '3rem' };
    border-radius: 2rem;
    background-color: ${props => props.active ? `var(--color-primary)` : 'none' };
    transition: all 1s ease;

	img {
		width: 2rem;
        transition: all 0.4s ease-in-out;
        transform: ${props => props.active ? `scale(1.4)` : 'none' };
	}

    h3{
        white-space: nowrap;
    }
`;

export const Scroll = styled.div`
	height: 36rem;
	width: 100%;

    --trans-Y: ${(props) => props.transY||`0rem`};

    transform: translateY(var(--trans-Y));
    transition: transform 1s ease-out;
	
`;

export const Screen = styled.div`
	height: 36rem;
	width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
        text-align: left;
        color: var(--color-main);
        font-size: 1.2rem;
        margin: 0;
        line-height: 0;
    }

    p {
        text-align: left;
        color: var(--color-main);
        text-transform: none;
        font-size: 1.2rem;
        margin: 0;
    }
`;

export const HeadingTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;

    --size-list: 1.6rem;

    @media ${(props) => props.theme.breakpoints.md} {
		--size-list: 0rem;
	}

    ::before{
        content: "";
        position: absolute;
        width: var(--size-list);
        height: var(--size-list);
        border-radius: 50%;
        background-color: var(--color-background2);
        left: -5rem;
    }

    h3{
        color: var(--color-background2);
        font-size: 1.4rem;
        line-height: 1;
    }

    p{
        color: var(--color-text);
        background-color: var(--color-background2);
        padding: 0.5rem 2rem;
        border-radius: 2rem;
        font-size: 1.4rem;
    }


`;
