import getAdmin from "../models/admin.model.js";
import {sign} from "../utils/jwt.js";
// import "dotenv/config.js";

const Login = async (req, res, next) => {
    const { admin_name, admin_password } = req.body;
    const admin = await getAdmin(admin_name, admin_password);
    res.status(201).json({
        message: "ok",
        token: sign(
            {
                admin_id: admin[0].admin_id,
                role: admin[0].admin_role,
                branch_id: admin[0].branch_id
            },
            "anor"
        ),
    });
};

export { Login };
