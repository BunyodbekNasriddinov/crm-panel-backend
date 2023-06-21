import { AuthorizationError, InternalServerError } from '../errors/errors.js';
import jwt from '../utils/jwt.js';

export default (req, res, next) => {
	try {
		const token = req.headers?.token;

		if (!token) return next(new AuthorizationError('Token required'));

		if (jwt.verify(token)) {
			req.user = jwt.verify(token);
			next();
		}
	} catch (error) {
		next(new InternalServerError(error.message));
	}
};
