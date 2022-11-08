import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seniors from "./pages/Seniors";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Seniors />} />
			</Routes>
		</Router>
	);
};

export default App;
