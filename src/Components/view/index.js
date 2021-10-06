import React from "react";
import { Wrapper, Symbol } from "./styles/view";

const View = ({ children, ...restProps }) => {
	return (
		<Wrapper {...restProps} id="app">
			{children}
		</Wrapper>
	);
};

View.Symbol = function ViewSymbol({ children, ...restProps }) {
	return <Symbol {...restProps}>{children}</Symbol>;
};

export default View;
