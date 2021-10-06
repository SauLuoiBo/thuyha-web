import styled from "styled-components/macro";

import { keyframes } from "styled-components";


const updown = keyframes`
    0%, 100% {
    transform: translateY(0.2rem);
    }
    50% {
    transform: translateY(-0.2rem);
    }
`;


export const Symbol = styled.div`
    --size-btn: ${props => props.size || `3rem`};
    width: var(--size-btn);
    height: var(--size-btn);
    background-color: var(--color-background2);
    border-radius: 1rem;
    border: 2px solid var(--color-background1);
    position: sticky;
    
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    /* bottom: 2rem;
    right: 2rem; */
    bottom: 2rem;
    left: 95%;

    i{  
        animation: ${updown} 2s linear infinite;;
        font-size: 2rem;
        color: var(--color-background1);
    }
`



export const Wrapper = styled.div`
    /* height: 100vh;
    width: 100%; */
    position: relative;
    background-color: transparent;
    z-index: 1000;
    top: 0;
`


