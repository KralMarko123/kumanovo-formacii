import React from "react";
import "../../styles/formations/seniors/formation2.css";

const Formation2 = () => {
	const lineFour = [3, 1, 4];
	const lineThree = [2, 8, 9, 10, 5];
	const lineTwo = [6, 7, 16, 17, 11, 12];
	const lineOne = [12, 14, 15, 18, 19, 20];

	const lines = [[...lineOne], [...lineTwo], [...lineThree], [...lineFour]];
	return (
		<div className="formation two">
			<div className="formation__container">
				<span className="formation__number">Втора</span>
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

export default Formation2;
