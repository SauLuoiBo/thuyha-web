import React from "react";
import { Container, Header, HomeContent, Button } from "../../Components";
import bg from "../../assets/image/home-bg.jpg";
import pic from "../../assets/image/pic-1.png";
import { data } from "./data";

const index = () => {
	return (
		<Container imgUrl={bg} id="home">
			<Header logo="Thúy Hà" link={data} />
			<HomeContent pic={pic}>
				<HomeContent.Title>
					Hello, I'm <span>Thúy Hà</span>
				</HomeContent.Title>
				<HomeContent.Text>
					Knack of building applications with front and back end operations.
				</HomeContent.Text>
				<HomeContent.TypiText
					steps={[
						"Xin chào mọi người 😀",
						2000,
						"❤️ Làm việc tại VCC ❤️",
						2000,
						"Kỹ sư hạ tầng nước 🏄",
						500,
						"🏘️ Kỹ sư xây dựng 🏘️",
						1500,
						"Nguyễn Thị Thúy Hà!!!! 🐻",
						1500,
					]}
					loop={Infinity}
					wrapper="h2"
				/>
				<HomeContent.BtnGroup>
					<Button.One>Hire Me</Button.One>
					<Button.Two>Hire me</Button.Two>
				</HomeContent.BtnGroup>
			</HomeContent>
		</Container>
	);
};

export default index;
