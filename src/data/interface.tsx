export interface IProduct {
	id?: string | undefined;
	title: string;
	description: string;
	imageUrl: string;
	price: string;
	colors: string[];
	category: {
		id?: string;
		name: string;
		imageUrl: string;
	};
}

export interface IInput {
	id: string;
	name: "title" | "description" | "imageUrl" | "price";
	label: string;
	type: string;
}

export interface ICategory {
	id?: string;
	name: string;
	imageUrl: string;
}
