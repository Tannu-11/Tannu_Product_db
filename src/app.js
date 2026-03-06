import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";
import productRoutes from "./modules/products/product.routes.js";

// Initialize Express app
// We need to create an instance of the Express application to set up our server, 
// define routes, and use middleware. The `express()` function returns an instance of the Express application, 
// which we can then configure with routes and middleware to handle incoming HTTP requests and send responses.
const app = express();

app.use(cors());
app.use(express.json());

// Define a simple route for the root URL to provide API information
app.get("/", (req, res) => {
	res.json({
		message: "Product API is running",
		endpoints: [
			"POST /api/products",
			"GET /api/products",
			"GET /api/products/:id",
			"PUT /api/products/:id",
			"DELETE /api/products/:id",
		],
	});
});

// Use product routes for handling requests to /api/products
app.use("/api/products", productRoutes);

// Use custom middleware for handling 404 errors
app.use(notFound);
app.use(errorHandler);

export default app;
