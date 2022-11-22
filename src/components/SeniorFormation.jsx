import React from "react";
import "../styles/formations.css";
import "../styles/formations/seniors/formation2.css";
import "../styles/formations/seniors/formation3.css";
import "../styles/formations/seniors/formation4.css";
import "../styles/formations/seniors/formation5.css";
import "../styles/formations/seniors/formation6.css";

const SeniorFormation = ({ formation }) => {
	return (
		<div className={`formation ${formation.order}`}>
			<div className="formation__container">
				<span className="formation__number">{formation.name}</span>
				{formation.lines.map((line, i) => {
					return (
						<ul key={i} className="formation__line">
							{line.map((dot) => (
								<li key={dot.number} className="formation__dot">
									{dot.number}
									<span className="formation__dot-name">{dot.name}</span>
								</li>
							))}
						</ul>
					);
				})}
			</div>
		</div>
	);
};

export default SeniorFormation;
