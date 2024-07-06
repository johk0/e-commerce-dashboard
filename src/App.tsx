import Products from "./Pages/product/Products";
import "./app.css";
const App = () => {
	return (
		<>
			<div>
				<div className="container">
					<Products />
				</div>
				<div className="overlay"></div>
			</div>
		</>
	);
};

export default App;
