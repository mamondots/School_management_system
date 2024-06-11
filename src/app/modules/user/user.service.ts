// import config from '../../config';
// import { TStudent } from '../student/student.interface';
// import { Student } from '../student/student.model';
// import { Tuser } from './user.interface';
// import { User } from './user.model';

// const createStudentIntoDB = async (password: string, studentData: TStudent) => {
//   // if (await Student.isUserExists(studentData.id)) {
//   //   throw new Error('User already exits');
//   // }

//   //create a user object

//   const userData: Partial<Tuser> = {};

//   //if password is not given use defualt password

//   // if (!password) {
//   //   user.password = config.defualt_password as string;
//   // }else{
//   //   user.password = password
//   // }

//   userData.password = password || (config.defualt_password as string);

//   //set student role

//   userData.role = 'student';

//   //manual generate id
//   userData.id = '203010012';

//   // create a user

//   const newUser = await User.create(userData); //---build in static method---

//   //create a student

//   if (Object.keys(newUser).length) {
//     studentData.id = newUser.id; // emedding id
//     studentData.user = newUser._id; //reference id

//     const newStudent = await Student.create(studentData);
//     return newStudent;
//   }
// };

// export const userService = {
//   createStudentIntoDB,
// };

//----third modul end ---

//---fourth modul start ---

// import config from '../../config';
// import { TAcadimicSemester } from '../acadimicSemester/acadimicSemester.interface';
// import { AcadimicSemester } from '../acadimicSemester/acadimicSemester.model';
// import { TStudent } from '../student/student.interface';
// import { Student } from '../student/student.model';
// import { Tuser } from './user.interface';
// import { User } from './user.model';
// import { generateStudentID } from './user.utilites';

// const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
//   // if (await Student.isUserExists(studentData.id)) {
//   //   throw new Error('User already exits');
//   // }

//   //create a user object

//   const userData: Partial<Tuser> = {};

//   //if password is not given use defualt password

//   // if (!password) {
//   //   user.password = config.defualt_password as string;
//   // }else{
//   //   user.password = password
//   // }

//   userData.password = password || (config.defualt_password as string);

//   //set student role

//   userData.role = 'student';

//   //manual generate id
//   // userData.id = '203010012';

//   //auto generate id

//   // const admissionSemester = await AcadimicSemester.findById(
//   //   payLoad.admissionSemester,
//   // );

//   const admissionSemester = await AcadimicSemester.findById(
//     payLoad.admissionSemester,
//   );

//   userData.id = await generateStudentID(admissionSemester);

//   // create a user

//   const newUser = await User.create(userData); //---build in static method---

//   //create a student

//   if (Object.keys(newUser).length) {
//     payLoad.id = newUser.id; // emedding id
//     payLoad.user = newUser._id; //reference id

//     const newStudent = await Student.create(payLoad);
//     return newStudent;
//   }
// };

// export const userService = {
//   createStudentIntoDB,
// };

//---fourth modul end --

//---five & six modul start---

import mongoose from 'mongoose';
import config from '../../config';
import { TAcadimicSemester } from '../acadimicSemester/acadimicSemester.interface';
import { AcadimicSemester } from '../acadimicSemester/acadimicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { Tuser } from './user.interface';
import { User } from './user.model';
import { generateStudentID } from './user.utilites';
import { TFaculty } from '../Faculty/faculty.interface';
import { AcadimicDepartment } from '../acadimicDepartment/acadimicDepartment.model';
import AppError from '../../erroes/AppError';
import httpStatus from 'http-status';
import { Faculty } from '../Faculty/faculty.model';
import { generateAdminId, generateFacultyId } from './user.utils';
import { Admin } from '../Admin/admin.model';

const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exits');
  // }

  //create a user object

  const userData: Partial<Tuser> = {};

  //if password is not given use defualt password

  // if (!password) {
  //   user.password = config.defualt_password as string;
  // }else{
  //   user.password = password
  // }

  userData.password = password || (config.defualt_password as string);

  //set student role

  userData.role = 'student';

  //manual generate id
  // userData.id = '203010012';

  //auto generate id

  // const admissionSemester = await AcadimicSemester.findById(
  //   payLoad.admissionSemester,
  // );

  const admissionSemester = await AcadimicSemester.findById(
    payLoad.admissionSemester,
  );

  if (!admissionSemester) {
    throw new AppError(400, 'Admission semester not found');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    userData.id = await generateStudentID(admissionSemester);

    // create a user

    //transition-1

    const newUser = await User.create([userData], { session }); //---build in static method---

    //create a student

    if (!newUser.length) {
      throw new Error('Failed to create user');
    }

    payLoad.id = newUser[0].id; // emedding id
    payLoad.user = newUser[0]._id; //reference id

    //transition-2

    const newStudent = await Student.create([payLoad], { session });

    if (!newStudent.length) {
      throw new Error('Failed to create student');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

const createFacultyIntoDB = async (password: string, payload: TFaculty) => {
  // create a user object
  const userData: Partial<Tuser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.defualt_password as string);

  //set student role
  userData.role = 'faculty';

  // find academic department info
  const academicDepartment = await AcadimicDepartment.findById(
    payload.academicDepartment,
  );

  if (!academicDepartment) {
    throw new AppError(400, 'Academic department not found');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateFacultyId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); // array

    //create a faculty
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a faculty (transaction-2)

    const newFaculty = await Faculty.create([payload], { session });

    if (!newFaculty.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create faculty');
    }

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const createAdminIntoDB = async (password: string, payload: TFaculty) => {
  // create a user object
  const userData: Partial<Tuser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.defualt_password as string);

  //set student role
  userData.role = 'admin';

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateAdminId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });

    //create a admin
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a admin (transaction-2)
    const newAdmin = await Admin.create([payload], { session });

    if (!newAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const userService = {
  createStudentIntoDB,
  createFacultyIntoDB,
  createAdminIntoDB,
};
