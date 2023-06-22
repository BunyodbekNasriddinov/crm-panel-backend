import { Login } from "../controllers/auth.controller.js";
import { Router } from "express";
import checktoken from "../middlewares/checktoken.js";
import adminRole from '../middlewares/role.middleware.js'

const router = Router();

router.post("/login",  Login);

export default router;
