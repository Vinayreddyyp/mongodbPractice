const mongoose = require("mongoose");
const Product = require("./models/product");
mongoose
	.connect(
		"mongodb+srv://vinay:mongodb@cluster0.usfa4.mongodb.net/products?retryWrites=true&w=majority"
	)
	.then(() => {
		console.log("conttected to database");
	})
	.catch(() => {
		console.log("conntection failed");
	});

const Product = async (req, res, next) => {
	const createProduct = new Product({
		name: req.body.name,
		price: req.body.price,
	});
	const result = await createProduct.save();
	res.json(result);
};

exports.createProduct = createProduct;
