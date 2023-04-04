const fs = require("fs");

const ruta = "./products.json";

class ProductManager {
	constructor(path) {
		this.products = [];
		this.path = ruta;
	}

	addProduct = async (newProduct) => {
		try {
			this.getProducts();
			if (
				!newProduct.title ||
				!newProduct.description ||
				!newProduct.price ||
				!newProduct.thumbnail ||
				!newProduct.code ||
				!newProduct.stock
			)
				return console.log("Todos los campos son obligatorios.");
			let respuestaParseadaFind = this.products.find(
				(prod) => prod.code === newProduct.code
			);
			if (respuestaParseadaFind)
				return console.log("Ese código de producto ya fue utilizado");
			this.products.push({id: this.products.length + 1, ...newProduct});

			await fs.promises.writeFile(
				this.path,
				JSON.stringify(this.products, "utf-8")
			);

			return "El producto se agregó correctamente";
		} catch (error) {
			console.log(error);
		}
	};

	getProducts = async () => {
		try {
			if (fs.existsSync(ruta)) {
				const contenidoJSON = await fs.promises.readFile(ruta, "utf-8");

				this.products = JSON.parse(contenidoJSON);

				return this.products;
			}
			await fs.promises.writeFile(ruta, "[]", "utf-8");
			return [];
		} catch (error) {
			console.log(error);
		}
	};

	getProductById = async (id) => {
		try {
			await this.getProducts();
			let prod = this.products.find((prod) => prod.id === id);
			if (!prod) {
				return console.log("No hay ningún producto asociado a ese id");
			}
			return prod;
		} catch (error) {
			return error;
		}
	};

	deleteProduct = async (idBorrar) => {
		try {
			await this.getProducts();
			let prod = this.products.find((prod) => prod.id === idBorrar);
			if (!prod) {
				return console.log("No hay ningún producto asociado a ese id");
			}
			const aQuitar = this.products.filter((prod) => prod.id !== idBorrar);

			await fs.promises.writeFile(this.path, JSON.stringify(aQuitar, "utf-8"));
			return "Producto eliminado";
		} catch (error) {
			return error;
		}
	};

	updateProduct = async (id, modif) => {
		try {
			await this.getProducts();
			let prod = this.products.find((prod) => prod.id === id);
			if (!prod) {
				return console.log("No hay ningún producto asociado a ese id");
			}
			prod.title = modif.title;
			prod.description = modif.description;
			prod.price = modif.price;
			prod.thumbnail = modif.thumbnail;
			prod.stock = modif.stock;
			prod.code = modif.code;

			await fs.promises.writeFile(
				this.path,
				JSON.stringify(this.products, "utf-8")
			);
			return console.log(
				`Los cambios dse realizaron correctamente. El producto ahora es: ${JSON.stringify(
					prod,
					"utf-8"
				)}`
			);
		} catch (error) {
			return error;
		}
	};
}

const product = new ProductManager(ruta);

/*product.addProduct({
	title: "televisor",
	description: "televisor 50 pulgadas",
	price: 100000,
	thumbnail: "Sin foto",
	code: 1,
	stock: 12,
});
product.addProduct({
	title: "heladera",
	description: "heladera que enfría bien",
	price: 50000,
	thumbnail: "sin foto",
	code: 2,
	stock: 88,
}); */

let chequeo = async () => {
	//console.log(await product.getProducts());
	/*console.log(
		await product.updateProduct(1, {
			title: "Cocina",
			description: "Horno doble",
			price: 15000,
			thumbnail: "sin imagen",
			stock: 58,
			code: 3,
		})
	); */
	//console.log(await product.deleteProduct(2));
	//console.log(await product.getProductById(2));
};
chequeo();

module.export = {ProductManager};
