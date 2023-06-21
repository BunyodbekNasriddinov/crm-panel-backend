import { Login } from "../controllers/auth.controller.js";
import { Router } from "express";

const router = Router();

router.post("/login", Login);

export default router;
