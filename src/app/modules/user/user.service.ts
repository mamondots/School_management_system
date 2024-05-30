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

//---five modul start---

import config from '../../config';
import { TAcadimicSemester } from '../acadimicSemester/acadimicSemester.interface';
import { AcadimicSemester } from '../acadimicSemester/acadimicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { Tuser } from './user.interface';
import { User } from './user.model';
import { generateStudentID } from './user.utilites';

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

  userData.id = await generateStudentID(admissionSemester);

  // create a user

  const newUser = await User.create(userData); //---build in static method---

  //create a student

  if (Object.keys(newUser).length) {
    payLoad.id = newUser.id; // emedding id
    payLoad.user = newUser._id; //reference id

    const newStudent = await Student.create(payLoad);
    return newStudent;
  }
};

export const userService = {
  createStudentIntoDB,
};
