import express from "express";
import "express-async-errors";
import handleError from "./errors/handleError";
import productRoutes from "./routes/products.routes";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
  })
);

app.use("/products", productRoutes);

app.use(handleError);

export default app;
