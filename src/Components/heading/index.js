import React from "react";
import { Wrapper, Text, Title, Seperator } from "./styles/heading";

const Heading = (props) => {
	return (
		<Wrapper>
			<Seperator>
				<Title>{props.Title}</Title>
				<Text>{props.Text}</Text>
			</Seperator>
		</Wrapper>
	);
};

export default Heading;
