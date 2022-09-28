import React, { useContext } from "react";
import colorContext from "../Context/colorContext";

function SelectBlock({ color }) {
	const { selColor, setSelColor } = useContext(colorContext);
	return (
		<div
			className="block-select"
			style={{
				background: color,
				border:
					selColor === color
						? "4px solid #bebebe"
						: "2px solid #000000",
			}}
			onClick={() => setSelColor(color)}
		></div>
	);
}

export default SelectBlock;
