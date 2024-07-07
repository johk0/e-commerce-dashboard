import Image from "../ui/Image";
import Button from "../ui/Button";
import { IProduct } from "../../data/interface";
import { textSlice } from "../../utilts/functions";
import { formatNumbers } from "../../utilts/functions";
import CirclesColor from "../ui/CirclesColor";
import DeleteModal from "../ui/DeleteModal";
import { useContext } from "react";
import ProductsContext from "../../data/ProductsContext";
interface IProps {
	product: IProduct;
	setProductToEdit: (product: IProduct) => void;
	isOpenEdit: () => void;
	deleteProduct?: (product: IProduct) => void;
}

const ProductCard = ({
	product,
	setProductToEdit,
	isOpenEdit,
	deleteProduct,
}: IProps) => {
	//
	// images
	const { title, description, imageUrl, category, colors, price } = product;

	// handle cricles
	const circlesNumber = 5;
	const renderCircles = colors.slice(0, circlesNumber).map((color, index) => {
		return (
			<CirclesColor
				key={index + " - " + color}
				color={color}
				onClick={() => {
					// console.log("hi");
				}}
			/>
		);
	});
	// handle cricles

	// handle edit
	const onEdit = () => {
		setProductToEdit(product);
		isOpenEdit();
	};

	const handleProductDelete = (e: IProduct) => {
		if (deleteProduct) {
			deleteProduct(e);
		}
	};

	return (
		<>
			<div className="border rounded-md p-2 flex flex-col ">
				<Image
					imageUrl={imageUrl}
					alt="first"
					classes="rounded-md h-40 object-cover"
				/>

				<h3 className="my-2">{title}</h3>

				<p>{textSlice(description)}</p>

				<div className="flex space-x-2 my-3">{renderCircles}</div>

				<div className="flex items-center justify-between mb-5">
					<span className="">${" " + formatNumbers(Number(price))}</span>
					<Image
						imageUrl={category.imageUrl}
						alt="first"
						classes=" w-10 h-10 rounded-full object-cover drop-shadow-lg"
					/>
				</div>

				<div className="flex justify-between space-x-2">
					<Button
						className="bg-indigo-700"
						onClick={() => {
							// console.log("Edit");
							onEdit();
						}}>
						Edit
					</Button>
					<Button
						className="bg-red-700"
						onClick={(e) => {
							handleProductDelete(product);
						}}>
						Delete
					</Button>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
