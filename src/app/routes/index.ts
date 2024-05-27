// import { Router } from 'express';
// import { userRoutes } from '../modules/user/user.route';
// import { StudentRoutes } from '../modules/student/student.route';

// const rounter = Router();

// const modulRouter = [
//   {
//     path: '/users',
//     route: userRoutes,
//   },
//   {
//     path: '/students',
//     route: StudentRoutes,
//   },
// ];

// modulRouter.forEach((route) => rounter.use(route.path, route.route));

// export default rounter;

//--third modul end ---

//--- fourth modul start---

import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'password must be a string',
    })
    .max(20, { message: 'password can not be more tham 20 characters' })
    .optional(),
});

export default userValidationSchema;
