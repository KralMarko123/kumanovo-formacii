import React from "react";
import Formation1 from "../components/seniorsFormations/Formation1";
import Formation2 from "../components/seniorsFormations/Formation2";
import Formation3 from "../components/seniorsFormations/Formation3";
import "../styles/formations.css";

const Seniors = () => {
	return (
		<div className="page seniors">
			<Formation1 />
			<Formation2 />
			<Formation3 />
		</div>
	);
};

export default Seniors;
