import React, { useContext, useState } from "react";
import colorContext from "../Context/colorContext";
import SelectBlock from "./SelectBlock";

function SelectContainer() {
	const { colors, setColorsSelect } = useContext(colorContext);
	const [colorInput, setColorInput] = useState("");
	return (
		<div className="select-container">
			{colors.map((element, idx) => (
				<SelectBlock key={idx} color={element} />
			))}
			<div>
				#{" "}
				<input
					type="text"
					maxLength={6}
					style={{
						width: "60px",
						marginTop: "5px",
					}}
					value={colorInput}
					onChange={(e) => {
						setColorInput(e.target.value);
					}}
				/>
			</div>
			<p className="p-input">(ใส่ตัวอักษร 0-F)</p>
			<button
				style={{ marginTop: "10px" }}
				onClick={() => {
					const check = colors.find(
						(color) => color === "#" + colorInput
					);
					if (colorInput.length > 0 && check === undefined) {
						setColorsSelect("#" + colorInput);
						setColorInput("");
					}
				}}
			>
				ADD
			</button>
		</div>
	);
}

export default SelectContainer;
