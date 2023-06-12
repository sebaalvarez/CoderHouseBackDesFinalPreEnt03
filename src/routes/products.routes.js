import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
  auth,
} from "../controllers/products.controller.js";

const router = Router();

/***   Obtiene Todos los productos ***/
router.get("/", auth, getAllProducts);

/***   Obtiene producto por ID ***/
router.get("/:pid", getProductById);

/***   Carga producto ***/
router.post("/", auth, addProduct);

/*** Actualiza producto por ID ***/
router.put("/:pid", auth, updateProductById);

/***   Elimina producto por ID ***/
router.delete("/:pid", auth, deleteProductById);

export default router;
