import { useState } from "react";
import Header from "./components/Header";
import PaintContainer from "./components/PaintContainer";
import SelectContainer from "./components/SelectContainer";
import colorContext from "./Context/colorContext";
import "./styles/App.css";
import { createBlock, colorSelect } from "./DataLib/BlockData";

function App() {
	const [selColor, setSelColor] = useState("#FFFFFF");
	const [dataPaint, setDataPaint] = useState(createBlock());
	const [colors, setColors] = useState(colorSelect());
	const paint = (x, y) => {
		let newData = [...dataPaint];
		newData[y][x] = selColor;
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
				colors,
				setColorsSelect,
			}}
		>
			<div className="App">
				<Header />
				<div className="container">
					<SelectContainer color={colors} />
					<PaintContainer />
				</div>
			</div>
		</colorContext.Provider>
	);
}

export default App;
