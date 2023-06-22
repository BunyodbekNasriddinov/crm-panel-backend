import { AuthorizationError, InternalServerError } from "../errors/errors.js";
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.status(404).json("token is required");
        jwt.verify(token, "anor", (err, decode) => {
            if (err instanceof jwt.TokenExpiredError) {
                return res.status(400).json("token not valid");
            }

            if (err instanceof jwt.JsonWebTokenError) {
                return res.status(400).json("token not valid");
            }

            req.data = decode;
            next();
        });
    } catch (error) {
        next(new InternalServerError(error.message));
    }
};
