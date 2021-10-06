import styled from "styled-components";

export const Wrapper = styled.button`
    text-align: center;
`

export const Text = styled.h4`
    /* color: var(--color-text); */
    margin: 1rem 4rem;
`

export const One = styled.button`
    color: var(--color-text);
    border: 2px solid linen;
    font-size: 12px;
    background-color: var(--color-primary);
    border-radius: 5rem;
    text-align: center;
    width: fit-content;

    :hover {
        border-color: var(--color-background2);
    }
`

export const Two = styled.button`
    color: var(--color-text);
    border: 2px solid linen var(--color-background2);
    font-size: 12px;
    background-color: var(--color-background2);
    border-radius: 5rem;
    text-align: center;

    :hover {
        /* border-color: var(--color-text); */
        color: var(--color-main);
        background-color: var(--color-background1);
    }
`

export const Symbol = styled.div`
    --size-btn: ${props => props.size || `3rem`};
    width: var(--size-btn);
    height: var(--size-btn);
    background-color: var(--color-background2);
    border-radius: 1rem;
    border: 2px solid var(--color-background1);
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    i{
        font-size: 2rem;
        color: var(--color-background1);
    }
`