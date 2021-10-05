import styled from "styled-components/macro";

export const Wrapper = styled.section`
	display: flex;
	background-image: url(${(props) => props.imgUrl});
	position: relative;
`;

export const Inner = styled.div`
	display: block;
	margin: 2rem 40rem;
	width: 100%;
	text-align: center;
    overflow: hidden;
	/* text-align: center; */

	@media ${(props) => props.theme.breakpoints.xl} {
		margin: 2rem 30rem;
	}

	@media ${(props) => props.theme.breakpoints.lg} {
		margin: 2rem 20rem;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin: 2rem 10rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 2rem 1rem;
	}
`;

export const WrapperTwo = styled.section`
	display: flex;
	flex-wrap: wrap;
	background-image: url(${(props) => props.imgUrl});
	position: relative;
	background-position: 50%;
	background-attachment: fixed;
	z-index: -1;
	background-color: #212529;
	/* background:white; */
	background-blend-mode: multiply;
`;

export const Footer = styled.div`
	width: 100%;
	width: 100%;
	height: 100%;
	max-width: 1920px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	/* margin-top: -110px; */
`;
