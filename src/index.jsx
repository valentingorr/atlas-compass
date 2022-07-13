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
		<>Hello React, Hello Electron</>
	) ;
} ;

export default App;

createRoot(document.getElementById("root")).render(<App />);