import { Router } from 'express';
import { getAllBranches, getAllCourses, postCourses, updateCourse } from '../controllers/admin.controller.js';
import validate from '../middlewares/validate.js';

const router = Router();

router.get('/courses', getAllCourses);

router.get('/branches', getAllBranches);

router.post('/courses', validate, postCourses);

router.put('/courses/:course_id', updateCourse);

export default router;
