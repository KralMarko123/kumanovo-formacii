import React from "react";
import "../../styles/formations/juniors/formation4.css";

const Formation4 = () => {
	const lineOne = [1, 2, 3, 4, 5, 10, 11, 12, 13];
	const lineTwo = [15, 16, 17, 18, 24, 25, 26, 27, 14];
	const lineThree = [19, 6, 20, 7, 21, 8, 22, 9, 23];

	const lines = [[...lineOne], [...lineTwo], [...lineThree]];
	return (
		<div className="formation four">
			<div className="formation__container">
				<span className="formation__number">Четврта</span>
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

export default Formation4;
