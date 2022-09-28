import React, { useContext } from "react";
import colorContext from "../Context/colorContext";

function Controller() {
	const { clearPaint } = useContext(colorContext);
	return (
		<button style={{ marginBottom: "10px" }} onClick={() => clearPaint()}>
			CLEAR
		</button>
	);
}

export default Controller;
