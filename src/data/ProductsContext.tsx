import React, {
	createContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from "react";
import { products } from "./productsList";
import { IProduct } from "./interface";

interface ProductsContextType {
	value: IProduct[];
	setValue: Dispatch<SetStateAction<IProduct[]>>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
	undefined
);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [value, setValue] = useState<IProduct[]>(products);

	return (
		<ProductsContext.Provider value={{ value, setValue }}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContext;
