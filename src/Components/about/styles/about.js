import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* margin: 0 1rem; */
    
    position: relative;
    width: 100%;
    box-shadow: 0 0 20px -2px #1f2235;
    

    @media ${(props) => props.theme.breakpoints.lg} {
        grid-template-columns: repeat(1, 1fr);

    }
`

export const Pic = styled.div`
    display: flex;
    overflow: hidden;

    img{
        display: block;
        width: 100%;
        height: auto;
    }
`

export const Details = styled.div`
    padding: 3rem;
    display: block;
    text-align: left;
`

export const Text = styled.main`
    text-align: justify;
    font-size: 1.2rem;
`

export const Title = styled.main`
    font-size: 2rem;
    /* font-weight: 500; */
    text-align: justify;
`

export const List = styled.ul`
    display: block;
`

export const Item = styled.li`
    text-align: justify;
    list-style: square outside;
    font-size: 1.2rem;
`

export const Break = styled.div`
  flex-basis: 100%;
  height: 6rem;
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`;