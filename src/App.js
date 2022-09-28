import Header from "./components/Header";
import PaintContainer from "./components/PaintContainer";
import SelectContainer from "./components/SelectContainer";
import ContextProvider from "./Context/ContextProvider";
import Controller from "./components/Controller";
import "./styles/App.css";

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<Header />
				<div className="container">
					<SelectContainer />
					<PaintContainer />
				</div>
				<Controller />
			</div>
		</ContextProvider>
	);
}

export default App;
