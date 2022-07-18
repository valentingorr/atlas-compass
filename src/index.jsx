import React from "react";

import {
	render
} from "react-dom";

import {
	createRoot
} from "react-dom/client";

import "./style/style.scss";


const App = () => {
	return (
		<div className="App">
			<p>Let's get started🥳</p>
		</div>
	);
};

export default App;

createRoot(document.getElementById("root")).render(<App />);