import Products from "./Pages/product/Products";
import "./app.css";
import { Toaster } from "react-hot-toast";
const App = () => {
	return (
		<>
			<div>
				<div className="container">
					<Products />
				</div>
				<div className="overlay"></div>
			</div>
			<Toaster />
		</>
	);
};

export default App;
