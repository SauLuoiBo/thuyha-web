import React from "react";
import { Logo, NavLink, Wrapper, LinkS, Btn } from "./styles/header";

const Header = (props, ...restProps) => {
	const [isOpen, setIsOpen] = React.useState(false)
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
			<Btn className={isOpen ? "ro" : ""}>
				<i
					onClick={() => {
						setIsOpen(!isOpen);
					}}
					className={isOpen ? "fas fa-hamburger fa-times" : "fas fa-hamburger"}
				/>
			</Btn>
		</Wrapper>
	);
};

export default Header;
