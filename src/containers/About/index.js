import React from "react";
import { Container, Heading, AboutContent, Button } from "../../Components";
import pic from "../../assets/image/pic-2.png";
import { text, main } from "./data";

const About = () => {
	return (
		<Container id='about'>
			<Heading Title="About Me" Text="Why Choose Me?" />
			<AboutContent pic={pic}>
				<AboutContent.Text>{text.data}</AboutContent.Text>
				<AboutContent.Break />
				<AboutContent.Title>Here are a Few Highlights</AboutContent.Title>
				<AboutContent.List>
					{main.map((item, index) => (
						<AboutContent.Item key={index}>{item.data}</AboutContent.Item>
					))}
				</AboutContent.List>
				<AboutContent.Break />
				<AboutContent.BtnGroup>
					<Button.One>Hire me</Button.One>
					<Button.Two>Get Resume</Button.Two>
				</AboutContent.BtnGroup>
			</AboutContent>
		</Container>
	);
};

export default About;
