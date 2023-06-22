import { Router } from 'express';
import { getAllCourses, postCourses } from '../controllers/admin.controller.js';
import validate from '../middlewares/validate.js';

const router = Router();

router.get('/courses', getAllCourses);

router.post('/courses', validate, postCourses);

export default router;
