import { Router } from "express"
import LoginRouter from './auth.routes.js'
const router = Router()
router.use(LoginRouter)





export default router
