import { Router } from "express"
import branchController from "../controllers/branch.controller.js"

const router = Router()

router.post("/branch/new", branchController.newBranch)

export default router
