/**
 *
 * @param product {title: string, description: string, imageUrl: string, price: string}}
 * @returns {title: string, description: string, imageUrl: string, price: string}
 * @description This function validates the product object and returns an object with errors if any
 * @description It checks if the title is between 5 and 50 characters, description is between 20 and 150 characters, imageUrl is a valid URL and price is a valid number
 *
 */

export const productValidation = (product: {
	title: string;
	description: string;
	imageUrl: string;
	price: string;
}) => {
	const { title, description, imageUrl, price } = product;
	const errors: {
		title: string;
		description: string;
		imageUrl: string;
		price: string;
	} = {
		title: "",
		description: "",
		imageUrl: "",
		price: "",
	};
	const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(imageUrl);

	if (!title.trim() || title.length < 5 || title.length > 50) {
		errors.title = "Title must be between 5 and 50 characters";
	}
	if (
		!product.description.trim() ||
		description.length < 20 ||
		description.length > 150
	) {
		errors.description = "Description must be between 20 and 150 characters";
	}
	if (!imageUrl.trim() || !validUrl) {
		errors.imageUrl = "Please enter a valid image URL";
	}
	if (!price.trim() || isNaN(Number(price))) {
		errors.price = "Please enter a valid price";
	}

	return errors;
};
