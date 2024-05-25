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

//---second modul start----

// import { TStudent } from './student.interface';
// import { Student } from './student.model';

// const createStudentIntoDB = async (studentData: TStudent) => {
//   if (await Student.isUserExists(studentData.id)) {
//     throw new Error('User already exits');
//   }

//   const result = await Student.create(studentData); //---build in static method---

//   // const student = new Student(studentData); //---- build in instance method
//   // const result = await student.save();

//   return result;
// };

// const getAllStudentsFromDB = async () => {
//   const result = await Student.find();
//   return result;
// };

// const getSingleStudentFromDB = async (id: string) => {
//   const result = await Student.findOne({ id }); // this is id which one we send
//   //   const result = await StudentModel.findById(id); // this is for mongodb _id
//   return result;
// };
// const deleteSingleStudentFromDB = async (id: string) => {
//   const result = await Student.updateOne({ id }, { isDeleted: true });
//   return result;
// };

// export const StudentServices = {
//   createStudentIntoDB,
//   getAllStudentsFromDB,
//   getSingleStudentFromDB,
//   deleteSingleStudentFromDB,
// };

//---second modul end ----

import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User already exits');
  }

  const result = await Student.create(studentData); //---build in static method---

  // const student = new Student(studentData); //---- build in instance method
  // const result = await student.save();

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id }); // this is id which one we send
  //   const result = await StudentModel.findById(id); // this is for mongodb _id
  return result;
};
const deleteSingleStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
