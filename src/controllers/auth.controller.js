import getAdmin from "../models/admin.model.js";

const Login = (req, res, next) => {
    console.log(getAdmin());
    res.send("ok");
};

export  { Login };
