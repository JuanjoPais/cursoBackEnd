let productos = [];

class ProductManager {
	constructor(title, description, price, thumbnail, code, stock) {
		this.title = title;
		this.description = description;
		this.price = price;
		this.thumbnail = thumbnail;
		this.code = code;
		this.stock = stock;
		this.products = productos;
	}

	addProduct(newProduct) {
		if (
			newProduct.title &&
			newProduct.description &&
			newProduct.price &&
			newProduct.thumbnail &&
			newProduct.code &&
			newProduct.stock
		) {
			let product = this.products.find((prod) => prod.code === newProduct.code);

			if (product)
				return console.log("Ese código de producto ya fue utilizado");

			return this.products.push({id: this.products.length + 1, ...newProduct});
		} else {
			return console.log("Todos los campos son obligatorios.");
		}
	}

	getProducts() {
		return this.products;
	}

	getProductById(id) {
		let product = this.products.find((producto) => producto.id === id);

		if (!product) {
			return console.log("No hay ningún producto asociado a ese id");
		} else {
			return product;
		}
	}
}

const product = new ProductManager();

product.addProduct({
	title: "televisor",
	description: "televisor 50 pulgadas",
	price: 100000,
	thumbnail:
		"https://www.google.com/imgres?imgurl=https%3A%2F%2Fas01.epimg.net%2Fmeristation%2Fimagenes%2F2022%2F04%2F20%2Fbetech%2F1650476091_520724_1650476363_noticia_normal_recorte1.jpg&tbnid=jGkNSM0_RH8JYM&vet=12ahUKEwij4uTvwOP9AhVDn5UCHdauCgoQMygAegUIARDhAQ..i&imgrefurl=https%3A%2F%2Fas.com%2Fmeristation%2F2022%2F04%2F20%2Fbetech%2F1650476091_520724.html&docid=uXPjP_8t7BlIeM&w=720&h=405&q=tele&ved=2ahUKEwij4uTvwOP9AhVDn5UCHdauCgoQMygAegUIARDhAQ",
	code: 1,
	stock: 88,
});
product.addProduct({
	title: "heladera",
	description: "heladera que enfría bien",
	price: 50000,
	thumbnail:
		"https://www.google.com/imgres?imgurl=https%3A%2F%2Fas01.epimg.net%2Fmeristation%2Fimagenes%2F2022%2F04%2F20%2Fbetech%2F1650476091_520724_1650476363_noticia_normal_recorte1.jpg&tbnid=jGkNSM0_RH8JYM&vet=12ahUKEwij4uTvwOP9AhVDn5UCHdauCgoQMygAegUIARDhAQ..i&imgrefurl=https%3A%2F%2Fas.com%2Fmeristation%2F2022%2F04%2F20%2Fbetech%2F1650476091_520724.html&docid=uXPjP_8t7BlIeM&w=720&h=405&q=tele&ved=2ahUKEwij4uTvwOP9AhVDn5UCHdauCgoQMygAegUIARDhAQ",
	code: 2,
	stock: 88,
});

//console.log(product.getProducts());
//console.log(product.getProductById(1));
//console.log(product.getProductById(2));
// console.log(product.getProductById(3));
