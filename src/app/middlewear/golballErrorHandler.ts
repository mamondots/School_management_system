// import express, { NextFunction, Request, Response } from 'express';

// const globalErrHandler = (
//   err: any,
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   let statusCode = 500;
//   let message = err.message || 'Something wrong here!';

//   return res.status(statusCode).json({
//     success: false,
//     message,
//     error: err,
//   });
// };
// export default globalErrHandler;

//---third modul end---

//---fourth modul start ---

import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from 'express';
import { ZodError, ZodIssue } from 'zod';

const globalErrHandler: ErrorRequestHandler = (err, req, res, next) => {
  //set default value
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something wrong here!';

  type TErrorSource = {
    path: string | number;
    message: string;
  }[];

  let ErrorSouce: TErrorSource = [
    {
      path: '',
      message: 'Something wrong here!',
    },
  ];

  const handleZodError = (err: ZodError) => {
    const statusCode = 400;
    const ErrorSouce: TErrorSource = err.issues.map((issuse: ZodIssue) => {
      return {
        path: issuse?.path[issuse.path.length - 1],
        message: issuse.message,
      };
    });
    return {
      statusCode,
      message: 'zod validition error',
      ErrorSouce,
    };
  };

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    (statusCode = simplifiedError?.statusCode),
      (message = simplifiedError?.message),
      (ErrorSouce = simplifiedError?.ErrorSouce);
  }

  return res.status(statusCode).json({
    success: false,
    message,
    ErrorSouce,
  });
};
export default globalErrHandler;
