import React from "react";
import "../../styles/formations/juniors/formation3.css";

const Formation3 = () => {
	const lineOne = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14];
	const lineTwo = [15, 16, 17, 18, 24, 25, 26, 27];
	const lineThree = [6, 7, 8, 9];
	const lineFour = [19, 20, 21, 22, 23];

	const lines = [[...lineOne], [...lineTwo], [...lineThree], [...lineFour]];
	return (
		<div className="formation three">
			<div className="formation__container">
				<span className="formation__number">Трета</span>
				{lines.map((line, i) => {
					return (
						<ul key={i} className="formation__line">
							{line.map((dotNumber) => (
								<li key={dotNumber} className="formation__dot">
									{dotNumber}
								</li>
							))}
						</ul>
					);
				})}
			</div>
		</div>
	);
};

export default Formation3;
