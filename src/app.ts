import express from "express";
import { errorHandler } from "./middlewares/error-handler";
import loggerMiddleware from "./middlewares/logger-handler";
import bodyParser from "body-parser";
import { bookRoute } from "./routes/book.route";
import { authorRoute } from "./routes/author.route";
import { categoryRoute } from "./routes/category.route";

export const app = express();

// Get the Configs!
// const config = getConfig(process.env.NODE_ENV);
app.use(express.json());
// Use body-parser to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(loggerMiddleware);
//ROUTE
app.use("/book", bookRoute);
app.use("/author", authorRoute);
app.use("/category", categoryRoute);

// Global Error Handler
app.use(errorHandler);
