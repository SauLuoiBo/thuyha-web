import React from "react";
import { Wrapper, Details, Picture, Title, Text, BtnGroup, TypiText } from "./styles/home";

const HomeContent = ({ pic, children, ...restProps }) => {
	return (
		<Wrapper {...restProps}>
			<Details>{children}</Details>
			<Picture>
				<img src={pic} alt="asd" />
			</Picture>
		</Wrapper>
	);
};

HomeContent.Title = function HomeContentTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

HomeContent.Text = function HomeContentText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

HomeContent.BtnGroup = function HomeContentBtnGroup({ children, ...restProps }) {
	return <BtnGroup {...restProps}>{children}</BtnGroup>;
};

HomeContent.TypiText = function HomeContentTypiText({ children, ...restProps }) {
	return <TypiText {...restProps}>{children}</TypiText>;
};

export default HomeContent;
