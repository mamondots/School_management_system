// import express from 'express';
// import { userController } from './user.controller';

// const router = express.Router();

// router.post('/', userController.createStudent);

// export const userRoutes = router;

//---third modul end --

//---fourth modul start ---

// import express from 'express';
// import { userController } from './user.controller';

// const router = express.Router();

// router.post('/', userController.createStudent);

// export const userRoutes = router;

//--fourt modul end ---

//--five & six modul start ---

import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewear/validateRequest';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createStudentValidationSchema } from '../student/student.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  userController.createStudent,
);

router.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  userController.createFaculty,
);

router.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  userController.createAdmin,
);

export const userRoutes = router;
