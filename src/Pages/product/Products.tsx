import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import Modal from "../ui/Modal";
import ProductsContext from "../../data/ProductsContext";
import Button from "../ui/Button";
import { IProduct } from "../../data/interface";
import DeleteModal from "../ui/DeleteModal";
import toast from "react-hot-toast";

interface IProps {}

const Products: React.FC<IProps> = () => {
	const [productToEdit, setProductToEdit] = useState<IProduct>();
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenEdit, setIsOpenEdit] = useState(false);
	const [openDeleteMsg, setOpenDeleteMsg] = useState(false);
	const [productToDelete, setProductToDelete] = useState<IProduct | null>(null);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);
	const openEdit = () => setIsOpenEdit(true);
	const closeEdit = () => setIsOpenEdit(false);

	const context = useContext(ProductsContext);
	if (!context) {
		throw new Error("Products must be used within a ProductsProvider");
	}
	const allProducts = context.value;

	const renderProducts = allProducts.map((product) => (
		<ProductCard
			key={product.id}
			product={product}
			setProductToEdit={setProductToEdit}
			isOpenEdit={openEdit}
			deleteProduct={(e) => {
				setProductToDelete(e);
				setOpenDeleteMsg(true);
			}}
		/>
	));

	const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		// console.log("cancel", e);
	};

	const submit = () => {
		// console.log("submit from main");
	};

	const deleteProduct = (e: IProduct) => {
		context.setValue(allProducts.filter((product) => product.id !== e.id));
		setOpenDeleteMsg(false);
		setProductToDelete(null);
	};

	return (
		<>
			<div className="container px-1">
				<div className="flex items-end sm:items-center justify-between my-5 mb-10">
					<h2 className="font-semibold text-5xl ">
						Latest <span className="text-indigo-700">Products</span>
					</h2>
					<div>
						<Modal
							isOpen={isOpen}
							close={close}
							title="Add A New Product"
							sumbit={submit}>
							<div className="flex gap-3">
								<Button
									onClick={() => {}}
									className="bg-indigo-600 hover:bg-indigo-700">
									Submit
								</Button>
								<Button
									onClick={(e) => {
										close();
										onCancel(e);
									}}
									type="button"
									className="bg-gray-400 hover:bg-gray-500">
									Cancel
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

				<div>
					<Modal
						isOpen={isOpenEdit}
						close={closeEdit}
						productToEdit={productToEdit}
						title="Edit">
						<div className="flex gap-3">
							<Button
								onClick={() => {}}
								className="bg-indigo-600 hover:bg-indigo-700">
								Save
							</Button>
							<Button
								onClick={() => closeEdit()}
								className="bg-gray-400 hover:bg-gray-500">
								Cancel
							</Button>
						</div>
					</Modal>
				</div>

				<main className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 rounded-md">
					{renderProducts}
				</main>
				{openDeleteMsg && productToDelete && (
					<DeleteModal
						setOpenMsg={setOpenDeleteMsg}
						setDeleteState={(state) => {
							if (state) {
								deleteProduct(productToDelete);
								toast.success("Product deleted successfully", {
									style: {
										backgroundColor: "black",
										color: "white",
									},
								});
							}
						}}
					/>
				)}
			</div>
		</>
	);
};

export default Products;
