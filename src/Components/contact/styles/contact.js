import styled from "styled-components/macro";
import { keyframes } from "styled-components";


const show = keyframes`
    0%, 100% {
    opacity: 1;
    }
    50% {
		opacity: 0;
    }
`;

export const Wrapper = styled.section`
	background-color: var(--color-primary);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 20px -2px #1f2235;
	border-radius: 1.2rem;
	padding: 2rem;
`;

export const Title = styled.h2`
	text-align: left;
	color: var(--color-text);
	/* margin: 2rem 2rem; */
	display: flex;
	align-self: flex-start;
	line-height: 3.5rem;

	::after {
		transition: none;
		content: "";
		animation: ${show} 2s linear infinite;;
		border-left: 1rem solid var(--color-text);
		margin-left: 1rem;
	}
`;

export const Frame = styled.div`
	/* max-width: 110rem; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 2rem 2rem;
	width: 100%;
	
	/* gap: 2rem; */
`;

export const Pic = styled.div`
	flex: 1 1 30rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: left;
	align-items: flex-start;

	width: 100%;
	text-align: center;

	max-width: 40rem;

	img {
		width: 100%;
	}

	h2 {
		opacity: 0.5;
		color: var(--color-text);
		font-size: 2rem;
	}
`;

export const Form = styled.form`
	max-width: 40rem;
	flex: 1 1 30rem;
	width: 100%;
	opacity: 0.9;
	text-align: left;
	background-color: #fff;
	border-radius: 1.2rem;
	padding: 2rem;
	display: flex;
	color: #111;
	justify-content: center;
	flex-direction: column;

	h5 {
		color: var(--color-background2);
		font-size: 1.6rem;
		text-align: center;
	}

	label {
		margin: 1rem 0;
	}

	textarea {
		width: 100%;
		border: 2px solid transparent;
		outline: none;
		background-color: hsla(0, 0%, 90.2%, 0.6);
		padding: 0.5rem 1rem;
		font-size: 1.4rem;
		margin-bottom: 22px;
		transition: 0.3s;
		border-radius: 10px;
		resize: none;
		height: 10rem;

		:focus {
			border: 2px solid #007bff;
		}
	}

	input {
		width: 100%;
		border: 2px solid transparent;
		outline: none;
		background-color: hsla(0, 0%, 90.2%, 0.6);
		padding: 0.5rem 1rem;
		font-size: 1.4rem;
		transition: 0.3s;
		border-radius: 1rem;
		padding: 1rem;

		:focus {
			border: 2px solid #007bff;
		}
	}
`;
