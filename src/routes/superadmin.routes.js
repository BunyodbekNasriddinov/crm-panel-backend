import { Router } from "express"
import superadminController from "../controllers/superadmin.controller.js"

const router = Router()

router.post('/superadmin', superadminController.login)

export default router