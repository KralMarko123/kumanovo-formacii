import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Juniors from "./pages/Juniors";
import Seniors from "./pages/Seniors";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="/" element={<Home />} />
				<Route path="/seniors" element={<Seniors />} />
				<Route path="/juniors" element={<Juniors />} />
			</Routes>
		</Router>
	);
};

export default App;
