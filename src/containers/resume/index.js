import React, { useState } from "react";
import { Container, Heading, ResumeContent } from "../../Components";

import { link, edu, work, pro, inter, skills } from "./data";

// const [transY, setTransY] = useState(`0rem`)

const Resume = () => {
	const [transY, setTransY] = useState(`0rem`);

	const active = (trans) => {
		if (transY === trans) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<Container id="resume">
			<Heading Title="Resume" Text="My format Bio Details" />
			<ResumeContent>
				<ResumeContent.Bullets>
					{link.map((data, index) => (
						<ResumeContent.NavLink
							key={index}
							active={active(data.Trans)}
							onClick={() => setTransY(data.Trans)}
						>
							<img src={data.img} alt="icon" />
							<h3>{data.Title}</h3>
						</ResumeContent.NavLink>
					))}
				</ResumeContent.Bullets>
				<ResumeContent.Details>
					<ResumeContent.Scroll transY={transY}>
						<ResumeContent.Screen>
							{edu.map((data, index) => (
								<ResumeContent.Heading key={index}>
									<ResumeContent.HeadingTitle>
										<h3>{data.Heading}</h3>
										<p>{data.year}</p>
									</ResumeContent.HeadingTitle>
									<h3>{data.Title}</h3>
									<p>{data.Main}</p>
								</ResumeContent.Heading>
							))}
						</ResumeContent.Screen>
						<ResumeContent.Screen>
							{work.map((data, index) => (
								<ResumeContent.Heading key={index}>
									<ResumeContent.HeadingTitle>
										<h3>{data.Heading}</h3>
										<p>{data.year}</p>
									</ResumeContent.HeadingTitle>
									<h3>{data.Title}</h3>
									<p>{data.Main}</p>
								</ResumeContent.Heading>
							))}
						</ResumeContent.Screen>
						<ResumeContent.Screen> 
							{skills.map((item, index) => (
								<ResumeContent.Bar Title={item.title} per={item.per} key={index} />
							))}
						</ResumeContent.Screen>
						<ResumeContent.Screen>
							{pro.map((data, index) => (
								<ResumeContent.Heading key={index}>
									<ResumeContent.HeadingTitle>
										<h3>{data.Heading}</h3>
										<p>{data.year}</p>
									</ResumeContent.HeadingTitle>
									<h3>{data.Title}</h3>
									<p>{data.Main}</p>
								</ResumeContent.Heading>
							))}
						</ResumeContent.Screen>
						<ResumeContent.Screen>
							{inter.map((data, index) => (
								<ResumeContent.Heading key={index}>
									<ResumeContent.HeadingTitle>
										<h3>{data.Heading}</h3>
									</ResumeContent.HeadingTitle>
									<h3>{data.Title}</h3>
									<p>{data.Main}</p>
								</ResumeContent.Heading>
							))}
						</ResumeContent.Screen>
					</ResumeContent.Scroll>
				</ResumeContent.Details>
			</ResumeContent>
		</Container>
	);
};

export default Resume;
