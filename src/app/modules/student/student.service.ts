//---FIRST MODUL START ---

// import { Student } from './student.interface';
// import { StudentModel } from './student.model';

// const createStudentIntoDB = async (student: Student) => {
//   const result = await StudentModel.create(student);
//   return result;
// };

// const getAllStudentsFromDB = async () => {
//   const result = await StudentModel.find();
//   return result;
// };

// const getSingleStudentFromDB = async (id: string) => {
//   const result = await StudentModel.findOne({ id }); // this is id which one we send
//   //   const result = await StudentModel.findById(id); // this is for mongodb _id
//   return result;
// };

// export const StudentServices = {
//   createStudentIntoDB,
//   getAllStudentsFromDB,
//   getSingleStudentFromDB,
// };

//---FIRST MODUL END---

import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id }); // this is id which one we send
  //   const result = await StudentModel.findById(id); // this is for mongodb _id
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
