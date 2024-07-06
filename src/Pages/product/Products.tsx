import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../../data/productsList";
import Modal from "../ui/Modal";
import ProductsContext from "../../data/ProductsContext";
import Button from "../ui/Button";
import { IProduct } from "../../data/interface";

interface IProps {}

const Products: React.FC<IProps> = () => {
	// get product data from clecked on edit button
	const [productToEdit, setProductToEdit] = useState<IProduct>();
	const [isOpen, setIsOpen] = useState(false);
	// know button clicked or not
	const [isOpenEdit, setIsOpenEdit] = useState(false);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	const openEdit = () => setIsOpenEdit(true);
	const closeEdit = () => setIsOpenEdit(false);

	// ____________ Handle Context ____________
	const context = useContext(ProductsContext);
	if (!context) {
		throw new Error("Products must be used within a ProductsProvider");
	}
	const allProducts = context.value;

	// ____________ Handle Context ____________

	// ____________ render products ____________

	const renderProducts = allProducts.map((product) => {
		return (
			<ProductCard
				key={product.id}
				product={product}
				setProductToEdit={setProductToEdit}
				isOpenEdit={openEdit}
			/>
		);
	});

	// ____________ render products ____________
	// ____________ Handle Modal ____________

	const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log("cancel", e);
	};

	// ____________ Handle Submit ____________
	const submit = () => {
		console.log("submit from main");
	};

	return (
		<>
			<div className="container px-1">
				<div className="flex items-end sm:items-center justify-between my-5">
					<h2 className="font-semibold text-5xl">
						Latest <span className="text-indigo-700">Products</span>
					</h2>
					<div>
						{/* build product */}
						<Modal
							isOpen={isOpen}
							close={close}
							title="Add A New Product"
							sumbit={submit}>
							<div className="flex gap-3">
								<Button
									onClick={() => {}}
									onSubmit={() => console.log("submit")}
									className="bg-indigo-600 hover:bg-indigo-700">
									submit
								</Button>
								<Button
									onClick={(e) => {
										close();
										onCancel(e);
									}}
									className="bg-gray-400 hover:bg-gray-500">
									cancel
								</Button>
							</div>
						</Modal>
						<Button
							onClick={open}
							className="bg-indigo-700 font-bold px-3 mt-2 text-lg">
							Build
						</Button>
					</div>
				</div>

				{/* Edit Modal */}
				<div>
					<Modal
						isOpen={isOpenEdit}
						close={closeEdit}
						productToEdit={productToEdit}
						title="Edit">
						<div className="flex gap-3">
							<Button
								onClick={() => {}}
								onSubmit={() => console.log("submit")}
								className="bg-indigo-600 hover:bg-indigo-700">
								Save
							</Button>
							<Button
								onClick={(e) => {
									closeEdit();
								}}
								className="bg-gray-400 hover:bg-gray-500">
								cancel
							</Button>
						</div>
					</Modal>
				</div>
				<main
					className="
					grid grid-cols-1 
					md:grid-cols-2
					sm:grid-cols-2
					lg:grid-cols-3 
					xl:grid-cols-4 
					gap-3
					md:gap-4 
					rounded-md 
					">
					{renderProducts}
				</main>
				{/* {isOpen && <div className="overlay on" onClick={close}></div>}
				{isOpenEdit && <div className="overlay on" onClick={close}></div>} */}
			</div>
		</>
	);
};

export default Products;
