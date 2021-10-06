import React from "react";
import { View } from "../../Components";
import { Link } from "react-scroll";
import styled from "styled-components";

const Screen = ({ children }) => {
	return (
		<View>
			{children}
			<LinkS
				to="home"
				activeClass="active"
				duration={500}
				spy={true}
				smooth={true}
			>
				<View.Symbol size="6rem" link="home">
					<i className="fa fa-arrow-up" />
				</View.Symbol>
			</LinkS>
		</View>
	);
};

const LinkS = styled(Link)`
	&.active {
		display: none;
	}
`;

export default Screen;
