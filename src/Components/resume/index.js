import React from "react";
import {
	Wrapper,
	Bullets,
	Details,
	NavLink,
	Scroll,
	Screen,
	Heading,
	HeadingTitle,
} from "./styles/resume";

const ResumeContent = ({ children, ...restProps }) => {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

ResumeContent.Bullets = function HomeContentBullets({
	children,
	...restProps
}) {
	return <Bullets {...restProps}>{children}</Bullets>;
};

ResumeContent.NavLink = function HomeContentNavLink({
	children,
	...restProps
}) {
	return <NavLink {...restProps}>{children}</NavLink>;
};

ResumeContent.Details = function HomeContentDetails({
	children,
	...restProps
}) {
	return <Details {...restProps}>{children}</Details>;
};

ResumeContent.Scroll = function HomeContentScroll({ children, ...restProps }) {
	return <Scroll {...restProps}>{children}</Scroll>;
};

ResumeContent.Screen = function HomeContentScreen({ children, ...restProps }) {
	return <Screen {...restProps}>{children}</Screen>;
};

ResumeContent.Heading = function HomeContentHeading({
	children,
	...restProps
}) {
	return <Heading {...restProps}>{children}</Heading>;
};


ResumeContent.HeadingTitle = function HomeContentHeadingTitle({
	children,
	...restProps
}) {
	return <HeadingTitle {...restProps}>{children}</HeadingTitle>;
};

export default ResumeContent;
