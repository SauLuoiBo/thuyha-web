import React from "react";
import { Logo, NavLink, Wrapper, LinkS } from "./styles/header";

const index = (props, ...restProps) => {
	return (
		<Wrapper {...restProps}>
			<Logo>{props.logo}</Logo>
			<NavLink>
				{props.link.map((item, index) => (
					<LinkS
						key={index}
						to={item.link}
						activeClass="active"
						duration={500}
						spy={true}
						smooth={true}
					>
						{item.name}
					</LinkS>
				))}
			</NavLink>
		</Wrapper>
	);
};

export default index;
