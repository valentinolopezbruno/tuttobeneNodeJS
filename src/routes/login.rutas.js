import {Router} from "express";
import { metodos as loginController} from "../controllers/login.controller";

const router = Router();

router.get("/login", loginController.getUsuario)

export default router