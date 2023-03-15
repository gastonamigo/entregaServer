import { json, Router } from "express";
import { manager } from "../app.js";

const viewsRouter = Router();
viewsRouter.use(json());

viewsRouter.get("/", async (req, res) => {
  const product = await manager.getProducts();
  res.render("home", {product});
});

viewsRouter.get("/real-time-products", async (req, res) => {
  const product = await manager.getProducts();
  res.render("real-time-products", {product});
});

export default viewsRouter;
