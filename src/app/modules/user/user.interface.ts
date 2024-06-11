// export type Tuser = {
//   id: string;
//   password: string;
//   needsPasswordChange: boolean;
//   role: 'admin' | 'student' | 'faculty';
//   status: 'in-progress' | 'blocked';
//   isDeleted: boolean;
// };

import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

//---third modul end ---

//---fourth modul start ---

// export type Tuser = {
//   id: string;
//   password: string;
//   needsPasswordChange: boolean;
//   role: 'admin' | 'student' | 'faculty';
//   status: 'in-progress' | 'blocked';
//   isDeleted: boolean;
// };

//---fourth modul end ---

//---five & six modul start ---

export interface Tuser {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}

export interface UserModel extends Model<Tuser> {
  //instance methods for checking if the user exist
  isUserExistsByCustomId(id: string): Promise<Tuser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
