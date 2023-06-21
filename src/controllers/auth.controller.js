import getAdmin from "../models/admin.model.js";
import jwt from "../utils/jwt.js";
// import "dotenv/config.js";

const Login = async (req, res, next) => {
    const { admin_name, admin_password } = req.body;
    const admin = await getAdmin(admin_name, admin_password);


    res.status(201).json({
        message: "ok",
        token: jwt.sign(
            {
                admin_id: admin.admin_id,
                role: admin.admin_role,
                branch_id: admin.branch_id,
            },
            process.env.SECRET_KEY
        ),
    });
};

export { Login };
