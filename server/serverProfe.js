const express = require("express");
const {ProductManager} = require("./productManager.js");

const app = express();

const path = "../products.json";

const productManager = new ProductManager(path);

app.use(express.urlencoded({extended: true}));

app.get("/productos", async (request, response) => {
	try {
		const products = await productManager.getProducts();
		const limit = request.query.limit;
		if (limit) {
			return response.send(products.slice(0, limit));
		}
		return response.send(products);
	} catch (error) {
		console.log(error);
	}
});

app.get("/producto/:id", async (request, response) => {
	try {
		const params = request.params.id;
		const producto = await productManager.getProductById(params);
		response.send(producto);
	} catch (error) {
		console.log(error);
	}
});
app.listen(8080, () => {
	console.log("escuchando el puerto 8080");
});
