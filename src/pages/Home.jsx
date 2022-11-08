import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	let navigate = useNavigate();

	return (
		<div className="home page">
			<div className="buttons">
				<button className="button" onClick={() => navigate("/seniors")}>
					Сениори
				</button>
				<button className="button" onClick={() => navigate("/juniors")}>
					Јуниори
				</button>
			</div>
		</div>
	);
};

export default Home;
