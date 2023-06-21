import jwt from 'jsonwebtoken';
import pkg from 'jsonwebtoken'

const {TokenExpiredError, JsonWebTokenError} = pkg

const SECRET_KEY = process.env.SECRET_KEY;

export default {
	sign: payload => jwt.sign(payload, SECRET_KEY),
	verify: token => {
		jwt.verify(token, SECRET_KEY, (err, decode) => {
			if (err && err instanceof JsonWebTokenError) {
				throw new Error(err);
			}

			if (err && err instanceof TokenExpiredError) {
				throw new Error(err);
			}

			return token;
		});
	},
};
