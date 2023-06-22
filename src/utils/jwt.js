import jwt from 'jsonwebtoken';


const sign = (payload) => {
	return jwt.sign(payload, 'anor')
}


const verify = (token) => {
	return jwt.verify(token, 'anor')
}

export {sign, verify}