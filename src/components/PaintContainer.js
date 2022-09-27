import React, { useContext } from "react";
import Block from "./Block";
import colorContext from "../Context/colorContext";

function PaintContainer() {
	const { dataPaint } = useContext(colorContext);
	return (
		<div className="paint-container">
			{dataPaint.map((dataRow, y) => {
				return (
					<div className="block-row" key={y}>
						{dataRow.map((dataCol, x) => (
							<Block color={dataCol} key={x} x={x} y={y} />
						))}
					</div>
				);
			})}
		</div>
	);
}

export default PaintContainer;
