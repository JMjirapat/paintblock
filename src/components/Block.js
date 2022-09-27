import React, { useContext } from "react";
import colorContext from "../Context/colorContext";

function Block({ color, x, y }) {
	const { paint } = useContext(colorContext);
	return (
		<div
			className="block"
			style={{ background: color }}
			onClick={() => paint(x, y)}
		></div>
	);
}

export default Block;
