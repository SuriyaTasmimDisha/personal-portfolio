import React, { useState } from "react";
import useDarkSide from "../hook/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Switcher = () => {
	const [colorTheme, setColorTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setColorTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<div>
				<DarkModeSwitch
					checked={darkSide}
					onChange={toggleDarkMode}
					size={24}
					sunColor="#F0122D"
				/>
			</div>
		</>
	);
};

export default Switcher;
