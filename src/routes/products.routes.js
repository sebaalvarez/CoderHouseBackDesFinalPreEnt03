import { Router } from "express";
import { authToken } from "../utils.js";
import { passportCall, authorization } from "../utils.js";
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
//  passportCall("jwt"),  authorization("user")
// authToken
router.get("/", authToken, getAllProducts);

/***   Obtiene producto por ID ***/
router.get("/:pid", getProductById);

/***   Carga producto ***/
router.post("/", auth, addProduct);

/*** Actualiza producto por ID ***/
router.put("/:pid", auth, updateProductById);

/***   Elimina producto por ID ***/
router.delete("/:pid", auth, deleteProductById);

export default router;
