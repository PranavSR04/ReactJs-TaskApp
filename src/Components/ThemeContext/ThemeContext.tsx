import React, { createContext, useState } from "react";
import {ThemeContextType} from "./types";


// interface childrenType{
// 	children:React.ReactNode
// }

export const Theme = createContext<ThemeContextType>({ theme: true, changeTheme: () => {} });
const ThemeContext = ({ children }:{children:React.ReactNode}):React.JSX.Element => {
	const [theme, setTheme] = useState<boolean>(true);
	const changeTheme = ():void => {
		setTheme((prev) => !prev);
	};
	return (
		<div>
			<Theme.Provider value={{ theme, changeTheme }}>{children}</Theme.Provider>
		</div>
	);
};

export default ThemeContext;
