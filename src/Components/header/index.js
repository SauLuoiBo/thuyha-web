import React from 'react'
import { Logo, NavLink, Wrapper } from './styles/header'

const index = (props, ...restProps) => {
    return (
        <Wrapper {...restProps}>
            <Logo>{props.logo}</Logo>
            <NavLink>
                <h3>dassda</h3>
                
            </NavLink>
        </Wrapper>
    )
}

export default index
