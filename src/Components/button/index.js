import React from "react";
import { Wrapper, Text, One, Two, Symbol } from "./styles/button";

const Button = ({ children, ...restProps }) => {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Button.One = function HomeContentOne({ children, ...restProps }) {
	return (
		<One {...restProps}>
			<Text>{children}</Text>
		</One>
	);
};

Button.Two = function HomeContentTwo({ children, ...restProps }) {
	return (
		<Two {...restProps}>
			<Text>{children}</Text>
		</Two>
	);
};

Button.Text = function HomeContentText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Button.Symbol = function HomeContentSymbol({ children, ...restProps }) {
	return <Symbol {...restProps}>{children}</Symbol>;
};


export default Button;
