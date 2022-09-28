import React from "react";
import { useState } from "react";
import { createBlock, colorSelect } from "../DataLib/BlockData";
import colorContext from "./colorContext";

function ContextProvider(props) {
	const [selColor, setSelColor] = useState("#FFFFFF");
	const [dataPaint, setDataPaint] = useState(createBlock());
	const [colors, setColors] = useState(colorSelect());
	const paint = (x, y) => {
		let newData = [...dataPaint];
		newData[y][x] = selColor;
		setDataPaint(newData);
	};
	const clearPaint = () => {
		let newData = createBlock();
		setDataPaint(newData);
	};
	const setColorsSelect = (newColor) => {
		let newColors = [...colors, newColor];
		setColors(newColors);
	};
	return (
		<colorContext.Provider
			value={{
				selColor,
				setSelColor,
				dataPaint,
				paint,
				clearPaint,
				colors,
				setColorsSelect,
			}}
		>
			{props.children}
		</colorContext.Provider>
	);
}

export default ContextProvider;
