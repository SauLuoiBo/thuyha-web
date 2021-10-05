import React from "react";
import { Wrapper, Pic, Details, Text, Title, List, Item, Break, BtnGroup } from "./styles/about";

const AboutContent = ({ pic, children, ...restProps }) => {
	return (
		<Wrapper {...restProps}>
			<Pic>
				<img src={pic} alt='pic' />
			</Pic>
			<Details>{children}</Details>
		</Wrapper>
	);
};

AboutContent.Text = function AboutContentText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

AboutContent.Title = function AboutContentTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

AboutContent.List = function AboutContentList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

AboutContent.Item = function AboutContentItem({ children, ...restProps }) {
	return <Item {...restProps}> {children}</Item>;
};

AboutContent.Break = function AboutContentBreak({ children, ...restProps }) {
	return <Break {...restProps}> {children}</Break>;
};

AboutContent.BtnGroup = function AboutContentBtnGroup({ children, ...restProps }) {
	return <BtnGroup {...restProps}> {children}</BtnGroup>;
};


export default AboutContent;
