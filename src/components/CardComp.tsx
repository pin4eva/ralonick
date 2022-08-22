import React from "react";

const CardComp = () => {
	return (
		<div className="ceo-p">
			{cardData.map((item) => {
				return (
					<div key={item.id} className="ceo">
						<img src={`/assets/guy_${item.image}.png`} alt="g1" />
						<div className="black">
							<h5>{item.name}</h5>
							<p>CEO</p>
							<div className="icon">
								<a href="www.figma.com">
									<i className="fa-brands fa-instagram"></i>
								</a>
								<a href="www.figma.com">
									<i className="fa-brands fa-twitter"></i>
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CardComp;

const cardData = [
	{
		id: 1,
		image: 1,
		name: "Joy Julius",
	},

	{
		id: 2,
		image: 2,
		name: "Gabriel Zaa",
	},

	{
		id: 3,
		image: 3,
		name: "Gabriel Zaa",
	},
];
