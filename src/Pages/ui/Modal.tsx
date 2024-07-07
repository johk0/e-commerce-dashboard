/**
 * @param {string} title
 * @param {React.ReactNode} children one or more React components render inside the modal usually be buttons
 * @param {boolean} isOpen the model is open or not
 * @param {function} close a function to close the modal returns boolean value
 * @returns {JSX.Element} a modal component
 *
 * @description This component is a modal component that takes a title, children, isOpen and close function as props and returns a modal component
 */

import {
	Dialog,
	DialogPanel,
	DialogTitle,
	Select,
	Transition,
	TransitionChild,
} from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { categories, formInputs } from "../../data/productsList";
import Input from "./Input";
import { colors } from "../../data/productsList";
import { ICategory, IProduct } from "../../data/interface";
import { productValidation } from "../../Validations/productValidation";
import ErrorMsg from "./ErrorMsg";
import CirclesColor from "./CirclesColor";
import SelectMenu from "./SelectMenu";
import ProductsContext from "../../data/ProductsContext";
import toast from "react-hot-toast";

interface Iprops {
	title?: string;
	children: React.ReactNode;
	isOpen: boolean;
	close: () => void;
	sumbit?: () => void;
	productToEdit?: IProduct;
}

export default function MyModal({
	title,
	children,
	isOpen,
	close,
	sumbit,
	productToEdit,
}: Iprops) {
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [selectedCatgory, setSelectedCategory] = useState(categories[0]);
	const [tempColors, setTempColors] = useState<string[]>([]);

	// ____________ Handle Context ____________

	const context = useContext(ProductsContext);
	if (!context) {
		throw new Error("Products must be used within a ProductsProvider");
	}
	const setAllProducts = context.setValue;
	// ____________ Handle Context ____________
	// ____________ Handle Modal ____________

	const [product, setProduct] = useState<IProduct>({
		id: "",
		title: "",
		description: "",
		imageUrl: "",
		price: "",
		colors: [],
		category: {
			id: "",
			name: "",
			imageUrl: "",
		},
	});
	useEffect(() => {
		if (productToEdit) {
			setProduct(productToEdit);
			setTempColors(productToEdit.colors);
			setSelectedCategory(productToEdit.category);
		}
	}, [productToEdit]);
	let findErrors = productValidation(product);

	// ____________ Handle input onchange ____________
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProduct({
			...product,
			[name]: value,
		});

		const key = name as keyof typeof findErrors;

		if (findErrors[key] == "") {
			setErrors({ ...errors, [key]: "" });
		}

		// setErrors(...errors, { [name]: findErrors[name] });
	};

	// ____________ render ____________

	const renderFormInputs = formInputs.map((input) => {
		return (
			<div className="flex flex-col mb-4 " key={input.id}>
				<label className="" htmlFor={input.id}>
					{input.label}
				</label>
				<Input
					type={input.type}
					id={input.id}
					name={input.name}
					value={product[input.name]}
					onChange={(e) => {
						onChangeHandler(e);
					}}
				/>

				{<ErrorMsg msg={errors[input.name]} />}
			</div>

			//
		);
	});

	// ____________ render cicles ____________
	const circlesNumber = Infinity;
	const renderCircles = colors.slice(0, circlesNumber).map((color, index) => {
		return (
			<CirclesColor
				key={index + " - " + color}
				color={color}
				onClick={() => {
					if (tempColors.includes(color)) {
						setTempColors((prev) => {
							return prev.filter((c) => c !== color);
						});
					} else {
						setTempColors((prev) => [...prev, color]);
					}
				}}
			/>
		);
	});

	// ____________ render cicles ____________
	const renderSelectedCircles = tempColors.map((color, index) => {
		return (
			<span
				key={color}
				style={{ background: color }}
				className="px-1 rounded-md">
				{color}
			</span>
		);
	});

	// ____________ render ___________________

	// ____________ Handle Submit ____________

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const hasError = Object.values(findErrors).some((val) => val !== "");
		if (hasError) {
			setErrors(findErrors);
			return;
		}

		if (productToEdit) {
			setAllProducts((prev) => {
				return prev.map((p) => {
					if (p.id === product.id) {
						return {
							...product,
							colors: tempColors,
							category: selectedCatgory,
						};
					}
					return p;
				});
			});
		} else {
			console.log("submitted");
			setProduct({ ...product, colors: tempColors, category: selectedCatgory });
			setAllProducts((prev) => [
				...prev,
				{ ...product, colors: tempColors, category: selectedCatgory },
			]);
		}

		// console.log(tempColors);
		// console.log(selectedCatgory);

		// console.log(product);

		close();
		toast.success("Product added successfully");
	};
	// ____________ Handle Submit ____________

	return (
		<>
			<Transition appear show={isOpen}>
				<Dialog
					as="div"
					className="relative z-10 focus:outline-none"
					onClose={close}
					__demoMode>
					<div className="fixed inset-0 z-10 w-screen backdrop-blur-sm bg-black bg-opacity-20 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4">
							<TransitionChild
								enter="ease-out duration-300"
								enterFrom="opacity-0 transform-[scale(95%)]"
								enterTo="opacity-100 transform-[scale(100%)]"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 transform-[scale(100%)]"
								leaveTo="opacity-0 transform-[scale(95%)]">
								<DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl">
									<DialogTitle
										as="h3"
										className="text-base/7 font-medium text-black mb-7 text-center">
										{title}
									</DialogTitle>
									<form
										className="mt-2 text-sm/6 text-black"
										onSubmit={(e) => {
											if (sumbit) {
												sumbit();
											}
											submitHandler(e);
										}}>
										{renderFormInputs}
										<div className="">
											<SelectMenu
												selected={selectedCatgory}
												setSelected={setSelectedCategory}
											/>
										</div>
										<div className="flex space-x-2 my-3 flex-wrap">
											{renderSelectedCircles}
										</div>
										<div className="flex space-x-2 my-3 flex-wrap">
											{renderCircles}
										</div>
										<div className="mt-7 font-medium">{children}</div>
									</form>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
