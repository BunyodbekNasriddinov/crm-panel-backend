import { fetchAll, fetchOne } from "../utils/pg.js"

const getBranchByIdQuery = `
  SELECT * 
  FROM branch
  WHERE branch_id = $1
`

async function getBranchById(id) {
  return await fetchOne(getBranchByIdQuery, [id])
}

const newBranchQuery = `
  INSERT INTO branch(branch_name, branch_phone, branch_address) 
  VALUES($1, $2, $3)
  RETURNING *
`

async function newBranch({ branch_name, branch_phone, branch_address }) {
  return await fetchAll(newBranchQuery, [
    branch_name,
    branch_phone,
    branch_address,
  ])
}

const updateBranchQuery = `
  UPDATE branch
  SET
    branch_name IFNULL($1, branch_name), 
    branch_phone IFNULL($2, branch_phone), 
    branch_address IFNULL($3, branch_address)
  WHERE branch_id = $4
  RETURNING *
`

async function updateBranch({
  branch_id,
  branch_name,
  branch_phone,
  branch_address,
}) {
  return await fetchAll(updateBranchQuery, [
    branch_name,
    branch_phone,
    branch_address,
    branch_id,
  ])
}

const deleteBranchQuery = `
  DELETE FROM branch
  WHERE branch_id = $1
  RETURNING *
`

async function deleteBranch(id) {
  return await fetchAll(deleteBranchQuery, [id])
}

export default { newBranch, updateBranch, deleteBranch, getBranchById }
