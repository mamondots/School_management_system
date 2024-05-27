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

import express, { NextFunction, Request, Response } from 'express';

const globalErrHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;
  let message = err.message || 'Something wrong here!';

  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};
export default globalErrHandler;
