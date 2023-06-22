import Joi from 'joi';

export const courseSchema = Joi.object({
	course_name: Joi.string().required(),
	course_price : Joi.string().required(),
	branch_id: Joi.string().required(),
	avatar : Joi.string().required(),
});
