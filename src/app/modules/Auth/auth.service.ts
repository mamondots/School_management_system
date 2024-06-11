import httpStatus from 'http-status';
import AppError from '../../erroes/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';
const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  //   const isUserExit = await User.findOne({ id: payload?.id });

  //   if (!isUserExit) {
  //     throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  //   }

  const user = await User.isUserExistsByCustomId(payload.id);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  // checking if the user is already deleted

  //   const isDeleted = isUserExit?.isDeleted;

  //   if (isDeleted) {
  //     throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
  //   }

  const isDeleted = user?.isDeleted;

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
  }

  // checking if the user is blocked

  //   const userStatus = isUserExit?.status;

  //   if (userStatus === 'blocked') {
  //     throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
  //   }

  const userStatus = user?.status;

  if (userStatus === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
  }

  //checking if the password is correct

  //   const isPasswordMatch = await bcrypt.compare(
  //     payload?.password,
  //     isUserExit?.password,
  //   );

  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
  }

  //create token and sent to the  client

  const jwtPayload = {
    userId: user.id,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_token as string, {
    expiresIn: '10d',
  });

  return {
    accessToken,
    needPasswordChange: user?.needsPasswordChange,
  };
};
export const AuthServices = {
  loginUser,
};
