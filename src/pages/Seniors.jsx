import React from "react";
import { SENIOR_FORMATIONS } from "../constants/seniorFormations";
import SeniorFormation from "../components/SeniorFormation";

const Seniors = () => {
	return (
		<div className="page seniors">
			{SENIOR_FORMATIONS.map((formation) => (
				<SeniorFormation formation={formation} />
			))}
		</div>
	);
};

export default Seniors;
