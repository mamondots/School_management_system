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

// import express from 'express';
// import { userRoutes } from '../modules/user/user.route';
// import { StudentRoutes } from '../modules/student/student.route';
// import { AcadimicSemesterRoute } from '../modules/acadimicSemester/acadimicSemester.route';

// import { Router } from 'express';

// const router = Router();

// const moduleRoutes = [
//   {
//     path: '/users',
//     route: userRoutes,
//   },
//   {
//     path: '/students',
//     route: StudentRoutes,
//   },
//   {
//     path: '/acadimic-semester',
//     route: AcadimicSemesterRoute,
//   },
// ];

// moduleRoutes.forEach((route) => router.use(route.path, route.route));

// export default router;

//---fourth modul end ---

//--- five modul start ---

import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { StudentRoutes } from '../modules/student/student.route';
import { AcadimicSemesterRoute } from '../modules/acadimicSemester/acadimicSemester.route';

import { Router } from 'express';
import { AcadimicFaclityRouter } from '../modules/acadimicFaclity/acadimicFaclity.route';
import { AcadimicDepartmentRouter } from '../modules/acadimicDepartment/acadimicDepartment.router';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/acadimic-semester',
    route: AcadimicSemesterRoute,
  },
  {
    path: '/acadimic-faclity',
    route: AcadimicFaclityRouter,
  },
  {
    path: '/acadimic-department',
    route: AcadimicDepartmentRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
