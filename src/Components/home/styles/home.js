import styled from "styled-components/macro";
import Typical from "react-typical";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
    justify-content: center;
    align-items: center;
	padding: 0 2rem;
	overflow: hidden;
	flex-wrap: wrap;
`;

export const Details = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	flex: 2 1 40rem;
`;

export const Picture = styled.div`
	display: flex;
    text-align: center;
	align-items: center;
	justify-content: center;
	box-shadow: 0 1px 0px 0px #fff;
	border-radius: 50%;
	height: 38rem;
	width: 38rem;
	/* margin: 0 0px 0 100px; */
    

	img {
		width: 36rem;
		border-radius: 50%;
        transition: all .6s linear;

        :hover{
            transform: scale(1.05);
            transition: all .6s linear;
        }
	}
`;

export const Title = styled.h2`
    color: var(--color-text);

    span{
        color: var(--color-background2);
    }
`

export const Text = styled.p`
    color: var(--color-text);
    font-size: 2rem;
`


export const BtnGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    text-align: center;
    margin: 2rem 0;
`

export const TypiText = styled(Typical)`
    font-size: 3.5rem;
    color: var(--color-text);
`

