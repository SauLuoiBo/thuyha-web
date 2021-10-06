import styled from "styled-components/macro";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
    margin: 2rem 0;
`;
export const Title = styled.h2`
	
`;

export const Text = styled.main`
    font-size: 1.4rem;
`;

export const Seperator = styled.div`
	display: block;
	position: relative;
	padding-bottom: 1.5rem;
	width: fit-content;
	border-bottom: black solid;
    text-align: center;

	::after {
		/* width: 35px; */
        content: "";
		border-radius: 10px;
		background-color: var(--color-background2);
		height: 1rem;
		width: 3.5rem;
		position: absolute;
        left: 50%;
        bottom: -0.6rem;
		display: block;
		transform: translateX(-1.75rem);
	}
`;
