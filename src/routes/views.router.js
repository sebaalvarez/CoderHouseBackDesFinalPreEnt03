import { Router } from "express";

import {
  getProductsByCart,
  getProducts,
  getHome,
  auth,
} from "../controllers/views.controller.js";

const router = Router();

router.get("/", getHome);

/***  Obtiene Todos los productos y los muestra por navegador  ***/
router.get("/products", auth, getProducts);

/***  Obtiene Todos los productos del Carrito indicado y los muestra por navegador  ***/
router.get("/carts/:cid", auth, getProductsByCart);

export default router;
