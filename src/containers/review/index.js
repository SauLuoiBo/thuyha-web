import React, { useState } from "react";
import { Container, Heading, Card } from "../../Components";
import bg from "../../assets/image/bg.jpg";
import foot from "../../assets/image/foot.png";
import { data } from "./data";

const Review = () => {
	const [transX, setTransX] = useState(0);

	// setInterval(() => setTransX(prevState => prevState  +10), 3000)

	React.useEffect(() => {
		const timer = setTimeout(() => {
			// console.log("This will run after 3 second!");
			setTransX(transX + 44);
		}, 5000);
		if (transX > 200) {
			setTransX(0);
		}
		return () => clearTimeout(timer);
	}, [transX]);

	return (
		<section id='review' >
			<Heading Title="Testimonial" Text="What My Client Say About Me"  />
			<Container.Bg imgUrl={bg} >
				<Container.Inner>
					<Card transX={`-${transX}rem`}>
						{data.map((item, index) => 
						<Card.Item key={index} img={item.img} title={item.title} name={item.name} taffic={item.taffic}/>
						)}
						
					</Card>
				</Container.Inner>
				<Container.Footer>
					<img src={foot} alt="foot" />
				</Container.Footer>
			</Container.Bg>
		</section>
	);
};

export default Review;
