import {Router} from "express";
import { metodos as productosController} from "../controllers/productos.controller";
import upload from "../libs/storage"

const router = Router();

router.get("/producto", productosController.getProductos)
router.get("/producto:id", productosController.getProducto)
router.delete("/producto:id",productosController.deleteProducto)

router.post("/producto", upload.single('imagen'), productosController.addProducto)

router.put("/producto:id", productosController.updateProducto)

export default router