import {Router} from "express";
import { metodos as categoriasController} from "../controllers/categorias.controller";

const router = Router();

router.get("/categoria", categoriasController.getCategorias)

router.get("/categoria:id", categoriasController.getCategoria)

router.delete("/categoria", categoriasController.deleteCategoria)

router.post("/categoria", categoriasController.addCategoria)

router.put("/categoria", categoriasController.updateCategoria)

export default router