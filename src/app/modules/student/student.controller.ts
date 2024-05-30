//-----FIRST MODUL START ---

// import { StudentServices } from './student.service';
// import { Request, Response } from 'express';

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const studentData = req.body;
//     const result = await StudentServices.createStudentIntoDB(studentData);

//     res.status(200).json({
//       success: true,
//       message: 'Student is created succesfully',
//       data: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// const getAllStudents = async (req: Request, res: Response) => {
//   try {
//     const result = await StudentServices.getAllStudentsFromDB();

//     res.status(200).json({
//       success: true,
//       message: 'Students are retrieved succesfully',
//       data: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// const getSingleStudent = async (req: Request, res: Response) => {
//   try {
//     const { studentId } = req.params;

//     const result = await StudentServices.getSingleStudentFromDB(studentId);

//     res.status(200).json({
//       success: true,
//       message: 'Student is retrieved succesfully',
//       data: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const StudentControllers = {
//   createStudent,
//   getAllStudents,
//   getSingleStudent,
// };

//---FIRST MODUL END

//--second modul start ---

// import { StudentServices } from './student.service';
// import { Request, Response } from 'express';
// import studentValidationSchema from './student.validation';

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const studentData = req.body;

//     //zod validation

//     const zodparsedData = studentValidationSchema.parse(studentData);

//     const result = await StudentServices.createStudentIntoDB(zodparsedData);

//     res.status(200).json({
//       success: true,
//       message: 'Student is created succesfully',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || 'something went wrong',
//       error: err,
//     });
//   }
// };

// const getAllStudents = async (req: Request, res: Response) => {
//   try {
//     const result = await StudentServices.getAllStudentsFromDB();

//     res.status(200).json({
//       success: true,
//       message: 'Students are retrieved succesfully',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || 'something went wrong',
//       error: err,
//     });
//   }
// };

// const getSingleStudent = async (req: Request, res: Response) => {
//   try {
//     const { studentId } = req.params;

//     const result = await StudentServices.getSingleStudentFromDB(studentId);

//     res.status(200).json({
//       success: true,
//       message: 'Student is retrieved succesfully',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || 'something went wrong',
//       error: err,
//     });
//   }
// };

// const deleteSingleStudent = async (req: Request, res: Response) => {
//   try {
//     const { studentId } = req.params;

//     const result = await StudentServices.deleteSingleStudentFromDB(studentId);

//     res.status(200).json({
//       success: true,
//       message: 'Student is deleted succesfully',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || 'something went wrong',
//       error: err,
//     });
//   }
// };

// export const StudentControllers = {
//   createStudent,
//   getAllStudents,
//   getSingleStudent,
//   deleteSingleStudent,
// };

//----second modul end----

//---third modul start---

// import { StudentServices } from './student.service';
// import { NextFunction, Request, Response } from 'express';

// // const createStudent = async (req: Request, res: Response) => {
// //   try {
// //     const studentData = req.body;

// //     //zod validation

// //     const zodparsedData = studentValidationSchema.parse(studentData);

// //     const result = await StudentServices.createStudentIntoDB(zodparsedData);

// //     res.status(200).json({
// //       success: true,
// //       message: 'Student is created succesfully',
// //       data: result,
// //     });
// //   } catch (err: any) {
// //     res.status(500).json({
// //       success: false,
// //       message: err.message || 'something went wrong',
// //       error: err,
// //     });
// //   }
// // };

// const getAllStudents = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const result = await StudentServices.getAllStudentsFromDB();

//     res.status(200).json({
//       success: true,
//       message: 'Students are retrieved succesfully',
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

// const getSingleStudent = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { studentId } = req.params;

//     const result = await StudentServices.getSingleStudentFromDB(studentId);

//     res.status(200).json({
//       success: true,
//       message: 'Student is retrieved succesfully',
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

// const deleteSingleStudent = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { studentId } = req.params;

//     const result = await StudentServices.deleteSingleStudentFromDB(studentId);

//     res.status(200).json({
//       success: true,
//       message: 'Student is deleted succesfully',
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

// export const StudentControllers = {
//   getAllStudents,
//   getSingleStudent,
//   deleteSingleStudent,
// };

//----third modul end -----

//---- fourth modul start ----

// import catchAsync from '../../utilites/catchAsync';
// import { StudentServices } from './student.service';
// import { NextFunction, Request, RequestHandler, Response } from 'express';

// // const catchAsync = (fu: RequestHandler) => {
// //   return (req: Request, res: Response, next: NextFunction) => {
// //     Promise.resolve(fn(req, res, next)).catch((err) => next(err));
// //   };
// // };

// const getAllStudents = catchAsync(async (req, res, next) => {
//   const result = await StudentServices.getAllStudentsFromDB();
//   res.status(200).json({
//     success: true,
//     message: 'Students are retrieved succesfully',
//     data: result,
//   });
// });

// const getSingleStudent = catchAsync(async (req, res, next) => {
//   const { studentId } = req.params;

//   const result = await StudentServices.getSingleStudentFromDB(studentId);

//   res.status(200).json({
//     success: true,
//     message: 'Student is retrieved succesfully',
//     data: result,
//   });
// });

// const deleteSingleStudent = catchAsync(async (req, res, next) => {
//   const { studentId } = req.params;

//   const result = await StudentServices.deleteSingleStudentFromDB(studentId);

//   res.status(200).json({
//     success: true,
//     message: 'Student is deleted succesfully',
//     data: result,
//   });
// });

// export const StudentControllers = {
//   getAllStudents,
//   getSingleStudent,
//   deleteSingleStudent,
// };
// function fn(
//   req: Request<
//     import('express-serve-static-core').ParamsDictionary,
//     any,
//     any,
//     import('qs').ParsedQs,
//     Record<string, any>
//   >,
//   res: Response<any, Record<string, any>>,
//   next: NextFunction,
// ): any {
//   throw new Error('Function not implemented.');
// }

//--fourth modul end ---

//--five modul start ---

import catchAsync from '../../utilites/catchAsync';
import { StudentServices } from './student.service';
import { NextFunction, Request, RequestHandler, Response } from 'express';

// const catchAsync = (fu: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((err) => next(err));
//   };
// };

const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentsFromDB();
  res.status(200).json({
    success: true,
    message: 'Students are retrieved succesfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;

  const result = await StudentServices.getSingleStudentFromDB(studentId);

  res.status(200).json({
    success: true,
    message: 'Student is retrieved succesfully',
    data: result,
  });
});

const deleteSingleStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;

  const result = await StudentServices.deleteSingleStudentFromDB(studentId);

  res.status(200).json({
    success: true,
    message: 'Student is deleted succesfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteSingleStudent,
};
function fn(
  req: Request<
    import('express-serve-static-core').ParamsDictionary,
    any,
    any,
    import('qs').ParsedQs,
    Record<string, any>
  >,
  res: Response<any, Record<string, any>>,
  next: NextFunction,
): any {
  throw new Error('Function not implemented.');
}
