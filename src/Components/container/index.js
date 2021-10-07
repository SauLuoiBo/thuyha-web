import React from "react";
import { Wrapper, Inner, WrapperTwo, Footer } from "./styles/container";

const Container = ({ children, ...restProps }) => {
	return (
		<Wrapper {...restProps}>
			<Inner>{children}</Inner>
		</Wrapper>
	);
};

Container.Real = function ContainerReal({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Container.Bg = function ContainerWrapperTwo({ children, ...restProps }) {
	return <WrapperTwo {...restProps}>{children}</WrapperTwo>;
};

Container.Inner = function ContainerInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Container.Footer = function ContainerFooter({ children, ...restProps }) {
	return <Footer {...restProps}>{children}</Footer>;
};

export default Container;
