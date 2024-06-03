// import { NextFunction, Request, Response } from 'express';
// import { userService } from './user.service';

// const createStudent = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { password, student: studentData } = req.body;

//     //zod validation

//     // const zodparsedData = studentValidationSchema.parse(studentData);

//     const result = await userService.createStudentIntoDB(password, studentData);

//     res.status(200).json({
//       success: true,
//       message: 'Student is created succesfully',
//       data: result,
//     });
//   } catch (err: any) {
//     // res.status(500).json({
//     //   success: false,
//     //   message: err.message || 'something went wrong',
//     //   error: err,
//     // });
//     next(err);
//   }
// };

// export const userController = {
//   createStudent,
// };

//----third modul end ---

//----fourt modul start ----

// import { userService } from './user.service';
// import catchAsync from '../../utilites/catchAsync';

// const createStudent = catchAsync(async (req, res, next) => {
//   const { password, student: studentData } = req.body;

//   //zod validation

//   // const zodparsedData = studentValidationSchema.parse(studentData);

//   const result = await userService.createStudentIntoDB(password, studentData);

//   res.status(200).json({
//     success: true,
//     message: 'Student is created succesfully',
//     data: result,
//   });
// });

// export const userController = {
//   createStudent,
// };

//---fourth model end ---

//--five & six modul start---

import { userService } from './user.service';
import catchAsync from '../../utilites/catchAsync';

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;

  //zod validation

  // const zodparsedData = studentValidationSchema.parse(studentData);

  const result = await userService.createStudentIntoDB(password, studentData);

  res.status(200).json({
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});

export const userController = {
  createStudent,
};
