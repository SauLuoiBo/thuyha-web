import React from "react";
import { Wrapper, Item, Pic, Title } from "./styles/Card";

const Card = ({ children, ...restProps }) => {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Card.Item = function CardItem(props, { children, ...restProps }) {
	return (
		<Item {...restProps}>
			<Title>
				{props.title}
				<i className="fas fa-quote-left left" />
				<i className="fas fa-quote-right right" />
			</Title>
			<div>
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				<i className="fas fa-star" />
			</div>
			<Pic>
				<img src={props.img} alt="pic" />
				<div>
					<h4>{props.name}</h4>
					<p>{props.taffic}</p>
				</div>
			</Pic>
		</Item>
	);
};

export default Card;
