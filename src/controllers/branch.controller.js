import { BadRequestError, InternalServerError } from "../errors/errors.js"
import branchModel from "../models/branch.model.js"

async function newBranch(req, res, next) {
  try {
    const branch = await branchModel.newBranch(req.body)

    if (branch instanceof BadRequestError) {
      return new next(BadRequestError(branch.message))
    }

    res.json({ status: 201, message: "created", data: branch })
  } catch (error) {
    return new next(InternalServerError(error.message))
  }
}

export default {
  newBranch,
}
