import { BadRequestError, InternalServerError } from "../errors/errors.js"
import branchModel from "../models/branch.model.js"

async function getBranchById(req, res, next) {
  const {branch_id} = req.data
  console.log(branch_id);
  const branch = await branchModel.getBranchById(branch_id)
  if (branch instanceof BadRequestError) {
    return new next(BadRequestError(branch.message))
  }

  res.json({ status: 200, message: "ok", data: branch })
}

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
async function updateBranch(req, res, next) {
  try {
    const branch = await branchModel.updateBranch({
      branch_id: req.params?.id,
      ...req.body,
    })

    if (branch instanceof BadRequestError) {
      return new next(BadRequestError(branch.message))
    }

    res.json({ status: 200, message: "updated", data: branch })
  } catch (error) {
    return new next(InternalServerError(error.message))
  }
}

async function deleteBranch(req, res, next) {
  try {
    const branch = await branchModel.deleteBranch(req.params?.id)

    if (branch instanceof BadRequestError) {
      return new next(BadRequestError(branch.message))
    }

    res.json({ status: 200, message: "deleted", data: branch })
  } catch (error) {
    return new next(InternalServerError(error.message))
  }
}

export default {
  getBranchById,
  newBranch,
  updateBranch,
  deleteBranch,
}
