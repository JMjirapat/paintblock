import React, { useContext } from "react";
import colorContext from "../Context/colorContext";

function SelectBlock({ color }) {
	const { selColor, setSelColor } = useContext(colorContext);
	return (
		<div
			className="block-select"
			style={{
				background: color,
				borderWidth: selColor === color ? "4px" : "2px",
				borderColor: selColor === color ? "#bebebe" : "#000000",
			}}
			onClick={() => setSelColor(color)}
		></div>
	);
}

export default SelectBlock;
