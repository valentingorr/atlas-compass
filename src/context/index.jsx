import React, {
	createContext
} from "react";

export const user = createContext();
export const style = createContext();
export default props => {
	return (
		<user.Provider value={props.user}>
		<style.Provider value={props.STYLE}>
			{props.children}
		</style.Provider>
		</user.Provider>
	);
};