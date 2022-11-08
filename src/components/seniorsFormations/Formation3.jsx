import React from "react";
import "../../styles/formations/seniors/formation3.css";

const Formation3 = () => {
	const lineTwo = [6, 7, 16, 3, 1, 4, 17, 11, 12, 20];
	const lineOne = [13, 14, 15, 2, 8, 9, 10, 5, 18, 19];

	const lines = [[...lineOne], [...lineTwo]];
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
