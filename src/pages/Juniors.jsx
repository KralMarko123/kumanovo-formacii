import React from "react";
import { JUNIOR_FORMATIONS } from "./../constants/juniorsFormations";
import JuniorFormation from "./../components/JuniorFormation";

const Juniors = () => {
	return (
		<div className="page juniors">
			{JUNIOR_FORMATIONS.map((formation) => (
				<JuniorFormation key={formation.order} formation={formation} />
			))}
		</div>
	);
};

export default Juniors;
