import { v4 as uuid } from "uuid";
import { ICategory, IInput, IProduct } from "./interface";

export const products: IProduct[] = [
	{
		id: uuid(),
		title: "2022 Genesis GV70: Nominee",
		description:
			"As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent company) in 2015.",
		imageUrl:
			"https://bloximages.newyork1.vip.townnews.com/gmtoday.com/content/tncms/assets/v3/editorial/0/ae/0ae5b1c0-5753-11ec-b742-2fad444119f8/61af493f71bc0.image.jpg?resize=400%2C291",
		price: "50000",
		colors: ["#FF0032", "#2536eb", "#FF6E31"],
		category: {
			id: uuid(),
			name: "Electronics",
			imageUrl:
				"https://img.freepik.com/premium-vector/computer-pc-icon-logo-design_775854-1632.jpg",
		},
	},
	{
		id: uuid(),
		title: "Chevrolet Spark. 995cc Petrol",
		description:
			"As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent company) in 2015.",
		imageUrl:
			"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wdWxsfGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
		price: "15000",
		colors: ["#00FF00", "#0000FF"],
		category: {
			id: uuid(),
			name: "Electronics",
			imageUrl:
				"https://img.freepik.com/premium-vector/computer-pc-icon-logo-design_775854-1632.jpg",
		},
	},
	{
		id: uuid(),
		title: "Tesla Model S",
		description:
			"A full-sized all-electric five-door liftback sedan, produced by Tesla, Inc.",
		imageUrl:
			"https://www.motortrend.com/uploads/2023/06/2025-Tesla-Model-S-Refresh.jpg?w=768&width=768&q=75&format=webp",
		price: "75000",
		colors: ["#FF0000", "#000000"],
		category: {
			id: uuid(),
			name: "Clothes",
			imageUrl:
				"https://static.vecteezy.com/system/resources/previews/023/160/394/non_2x/clothing-logo-design-women-boutique-logo-vector.jpg",
		},
	},
	{
		id: uuid(),
		title: "BMW 3 Series",
		description:
			"A compact executive car manufactured by the German automaker BMW.",
		imageUrl:
			"https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg",
		price: "45000",
		colors: ["#0000FF", "#FFFFFF"],
		category: {
			id: uuid(),
			name: "Electronics",
			imageUrl:
				"https://img.freepik.com/premium-vector/computer-pc-icon-logo-design_775854-1632.jpg",
		},
	},
	{
		id: uuid(),
		title: "Ford Mustang",
		description: "An American car manufactured by Ford.",
		imageUrl:
			"https://m.atcdn.co.uk/ect/media/%7Bresize%7D/3e7dbe41afea4891a15e05034e6360e1.jpg",
		price: "57000",
		colors: ["#0000FF", "#FFFFFF"],
		category: {
			id: uuid(),
			name: "Electronics",
			imageUrl:
				"https://img.freepik.com/premium-vector/computer-pc-icon-logo-design_775854-1632.jpg",
		},
	},
	{
		id: uuid(),
		title: "Porsche 911",
		description:
			"A high-performance sports car that blends iconic design with cutting-edge technology.",
		imageUrl:
			"https://media.autoexpress.co.uk/image/private/s--vZkbi5D1--/f_auto,t_primary-image-mobile@1/v1685458010/autoexpress/2023/05/Porsche%20911%20GTS%20UK%20001_otx6j7.jpg",
		price: "120000",
		colors: ["#FFFF00", "#000000"],
		category: {
			id: uuid(),
			name: "T-Shirt",
			imageUrl:
				"https://static.vecteezy.com/system/resources/previews/024/528/178/original/t-shirt-icon-isolated-on-white-background-for-your-web-and-mobile-app-design-t-shirt-logo-concept-can-be-used-as-a-logo-design-or-a-coloring-page-vector.jpg",
		},
	},
	{
		id: uuid(),
		title: "Toyota Prius",
		description:
			"A hybrid car known for its fuel efficiency and eco-friendly design.",
		imageUrl:
			"https://pro.bbcdn.io/fd/fd13cefd-10dc-41b9-a7e3-7a0d6131da7a?rule=legacy-largest",
		price: "30000",
		colors: ["#008000", "#D3D3D3"],
		category: {
			id: uuid(),
			name: "T-Shirt",
			imageUrl:
				"https://static.vecteezy.com/system/resources/previews/024/528/178/original/t-shirt-icon-isolated-on-white-background-for-your-web-and-mobile-app-design-t-shirt-logo-concept-can-be-used-as-a-logo-design-or-a-coloring-page-vector.jpg",
		},
	},
	{
		id: uuid(),
		title: "Honda Civic",
		description:
			"A reliable compact car that offers good fuel efficiency and a comfortable ride.",
		imageUrl:
			"https://staticb.yolcu360.com/blog/wp-content/uploads/2018/03/28203059/civic-sedan-dizel-1.jpg",
		price: "25000",
		colors: ["#4169E1", "#808080"],
		category: {
			id: uuid(),
			name: "Clothes",
			imageUrl:
				"https://static.vecteezy.com/system/resources/previews/023/160/394/non_2x/clothing-logo-design-women-boutique-logo-vector.jpg",
		},
	},
	{
		id: uuid(),
		title: "Mercedes-Benz C-Class",
		description:
			"A luxury sedan that combines elegant design with advanced technology.",
		imageUrl:
			"https://vehicle-images.dealerinspire.com/8f92-21001161/thumbnails/large/W1KAF8HB2PR096202/edad35ddd56e3534b59e11ff366e524e.jpg",
		price: "61000",
		colors: ["#C0C0C0", "#000000"],
		category: {
			id: uuid(),
			name: "Clothes",
			imageUrl:
				"https://static.vecteezy.com/system/resources/previews/023/160/394/non_2x/clothing-logo-design-women-boutique-logo-vector.jpg",
		},
	},
];
export const colors: string[] = [
	"#a855f7",
	"#f66d9b",
	"#f6a609",
	"#34d399",
	"#3b82f6",
	"#ef4444",
	"#10b981",
	"#f59e0b",
	"#6366f1",
	"#ec4899",
	"#000000",
];

export const formInputs: IInput[] = [
	{
		id: "title",
		name: "title",
		label: "Product Title",
		type: "text",
	},
	{
		id: "description",
		name: "description",
		label: "Description",
		type: "text",
	},
	{
		id: "image",
		name: "imageUrl",
		label: "URL",
		type: "text",
	},
	{
		id: "price",
		name: "price",
		label: "Price",
		type: "text",
	},
];
export const categories: ICategory[] = [
	{
		id: uuid(),
		name: "Trucks",
		imageUrl:
			"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJUTgENim8Us/v0/-1x-1.jpg",
	},
	{
		id: uuid(),
		name: "Sport",
		imageUrl:
			"https://as2.ftcdn.net/v2/jpg/04/08/39/51/1000_F_408395110_z0BJFhaW5HndCmreQcdITQopWwUyvC2k.jpg",
	},
	{
		id: uuid(),
		name: "Family",
		imageUrl:
			"https://www.shutterstock.com/image-vector/vector-car-260nw-107407622.jpg",
	},
];
