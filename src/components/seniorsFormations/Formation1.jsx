import React from "react";

const Formation1 = () => {
	const lineFour = [1];
	const lineThree = [2, 3, 4, 5];
	const lineTwo = [6, 7, 8, 9, 10, 11, 12];
	const lineOne = [13, 14, 15, 16, 17, 18, 19, 20];

	const lines = [[...lineOne], [...lineTwo], [...lineThree], [...lineFour]];
	return (
		<div className="formation one">
			<div className="formation__container">
				<span className="formation__number">Прва</span>
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

export default Formation1;
