import httpStatus from 'http-status';
import catchAsync from '../../utilites/catchAsync';
import sendResponse from '../../utilites/sendResponse';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
};
