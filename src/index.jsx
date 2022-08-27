import React, {
	useState,
	useEffect
} from "react";

import {
	render
} from "react-dom";

import {
	createRoot
} from "react-dom/client";

import {
	HashRouter,
	Routes,
	Route
} from "react-router-dom";

import * as CONTEXT from "./context/index.jsx";
import { createStore } from "redux";
import {
	Provider,
	useSelector,
	useDispatch
} from "react-redux";

import reducers from "./redux/reducers.js";
import * as ACTIONS from "./redux/actions.js";

import * as STYLE from "./style/_config.scss";
import "./style/style.scss";

//importing routes
import Home from "./routes/Home.jsx";

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {

	const [user, setUSer] = useState({
		connected: false
	});

	const theme = useSelector(state => state.theme);

	return (
		<CONTEXT.default {...{user, STYLE}} >
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</CONTEXT.default>
	);
};

export default App;

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>
);