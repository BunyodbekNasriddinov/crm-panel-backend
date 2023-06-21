import { Router } from "express"
import branchController from "../controllers/branch.controller"

const router = Router()

router.post("/branch/new", branchController.newBranch)

export default router
