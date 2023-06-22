import { BadRequestError } from "../errors/errors.js"
import superadminModel from "../models/superadmin.model.js"

async function login(req, res, next) {
  const superadmin = await superadminModel.login(req.body)

  try {
    if (superadmin instanceof BadRequestError)
      return next(new BadRequestError(superadmin.message))

  
  } catch (error) {}
}

export default {
  login,
}
