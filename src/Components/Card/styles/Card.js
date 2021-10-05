import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    /* overflow: hidden; */
    gap: 4rem;
    margin-top: 10rem;
    width: 100%;
    --trans-X: ${(props) => props.transX||`0rem`};

    transform: translateX(var(--trans-X));
    transition: transform 2s ease-in-out;
`



export const Item = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-start;
    width: 40rem;
    min-width: 40rem;
    height: 30rem;
    border-radius: 5rem 5rem 5rem 0rem;
    background-color: var(--color-text);
    padding: 2rem;
    box-shadow: 0 0 20px -2px #1f2235;

    i{
        color: var(--color-background2);
        font-size: 1.2rem;
    }
`

export const Pic = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 3rem;
    align-items: center;

    img{
        --size-img: 8rem;
        width: var(--size-img);
        height: var(--size-img);
        resize: none;
        border-radius: 100%;
        border: 3px solid #007bff;
        box-shadow: 0 0 20px -2px #007bff;
    }

    div{
        text-align: left;
    }
`

export const Title = styled.div`
    text-align: justify;
    text-indent: 3rem;
    position: relative;
    text-transform: none;

    i{
        position: absolute;

        &.left{
            top: 0;
            left: -2rem;
        }
        &.right{
            transform: translateX(-2rem);
        }
    }
`