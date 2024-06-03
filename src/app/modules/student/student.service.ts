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

//---third modul start ---

// import { Student } from './student.model';

// // const createStudentIntoDB = async (studentData: TStudent) => {
// //   if (await Student.isUserExists(studentData.id)) {
// //     throw new Error('User already exits');
// //   }

// //   const result = await Student.create(studentData); //---build in static method---

// //   // const student = new Student(studentData); //---- build in instance method
// //   // const result = await student.save();

// //   return result;
// // };

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
//   getAllStudentsFromDB,
//   getSingleStudentFromDB,
//   deleteSingleStudentFromDB,
// };

//----third modul end---

//---fouth modul start ---

// import { Student } from './student.model';

// // const createStudentIntoDB = async (studentData: TStudent) => {
// //   if (await Student.isUserExists(studentData.id)) {
// //     throw new Error('User already exits');
// //   }

// //   const result = await Student.create(studentData); //---build in static method---

// //   // const student = new Student(studentData); //---- build in instance method
// //   // const result = await student.save();

// //   return result;
// // };

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
//   getAllStudentsFromDB,
//   getSingleStudentFromDB,
//   deleteSingleStudentFromDB,
// };

//---fourth modul end ---

//--five modul start ---

// import mongoose from 'mongoose';
// import { Student } from './student.model';
// import { User } from '../user/user.model';
// import { TStudent } from './student.interface';
// import { object } from 'zod';
// import QueryBuilder from '../../builder/QueryBuilder';
// import { studentSearchableFields } from './student.constant';

// const getAllStudentsFromDB = async (query: Record<string, unknown>) => {

//   const studentQuery = new QueryBuilder(
//     Student.find()
//       .populate('admissionSemester')
//       .populate({
//         path: 'admissionDepartment',
//         populate: {
//           path: 'academicFaculty',
//         },
//       }),
//     query,
//   )
//     .search(studentSearchableFields)
//     .filter()
//     .sort()
//     .paginate()
//     .fields();

//   const result = await studentQuery.modelQuery;
//   return result;
// };

// const getSingleStudentFromDB = async (id: string) => {
//   const result = await Student.findById(id)
//     .populate('admissionSemester')
//     .populate({
//       path: 'admissionDepartment',
//       populate: {
//         path: 'academicFaculty',
//       },
//     }); // this is id which one we send
//   //   const result = await StudentModel.findById(id); // this is for mongodb _id
//   return result;
// };
// const deleteSingleStudentFromDB = async (id: string) => {
//   const session = await mongoose.startSession();

//   try {
//     session.startTransaction();
//     const deletedStudent = await Student.findOneAndUpdate(
//       { id },
//       { isDeleted: true },
//       { new: true, session },
//     );

//     if (!deletedStudent) {
//       throw new Error('faild to delete student');
//     }

//     const deletedUser = await User.findOneAndUpdate(
//       { id },
//       { isDeleted: true },
//       { new: true, session },
//     );

//     if (!deletedUser) {
//       throw new Error('faild to delete user');
//     }

//     await session.commitTransaction();
//     await session.endSession();

//     return deletedStudent;
//   } catch (error) {
//     await session.abortTransaction();
//     await session.endSession();
//   }
// };

// const updateDinleStudentsFromDB = async (
//   id: string,
//   payload: Partial<TStudent>,
// ) => {
//   const { name, guardian, localGuardian, ...reminingStudentData } = payload;
//   const modifiedUpdatedData: Record<string, unknown> = {
//     ...reminingStudentData,
//   };

//   if (name && Object.keys(name).length) {
//     for (const [key, value] of Object.entries(name)) {
//       modifiedUpdatedData[`name.${key}`] = value;
//     }
//   }

//   if (guardian && Object.keys(guardian).length) {
//     for (const [key, value] of Object.entries(guardian)) {
//       modifiedUpdatedData[`guardian.${key}`] = value;
//     }
//   }

//   if (localGuardian && Object.keys(localGuardian).length) {
//     for (const [key, value] of Object.entries(localGuardian)) {
//       modifiedUpdatedData[`localGuardian.${key}`] = value;
//     }
//   }

//   const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
//     new: true,
//   });
//   return result;
// };

// export const StudentServices = {
//   getAllStudentsFromDB,
//   getSingleStudentFromDB,
//   deleteSingleStudentFromDB,
//   updateDinleStudentsFromDB,
// };

//---five modul end ---

//--- six modul start ---

import mongoose from 'mongoose';
import { Student } from './student.model';
import { User } from '../user/user.model';
import { TStudent } from './student.interface';
import { object } from 'zod';
import QueryBuilder from '../../builder/QueryBuilder';
import { studentSearchableFields } from './student.constant';

const getAllStudentsFromDB = async (query: Record<string, unknown>) => {
  const studentQuery = new QueryBuilder(
    Student.find()
      .populate('admissionSemester')
      .populate({
        path: 'admissionDepartment',
        populate: {
          path: 'academicFaculty',
        },
      }),
    query,
  )
    .search(studentSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await studentQuery.modelQuery;
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById(id)
    .populate('admissionSemester')
    .populate({
      path: 'admissionDepartment',
      populate: {
        path: 'academicFaculty',
      },
    }); // this is id which one we send
  //   const result = await StudentModel.findById(id); // this is for mongodb _id
  return result;
};
const deleteSingleStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new Error('faild to delete student');
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new Error('faild to delete user');
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

const updateDinleStudentsFromDB = async (
  id: string,
  payload: Partial<TStudent>,
) => {
  const { name, guardian, localGuardian, ...reminingStudentData } = payload;
  const modifiedUpdatedData: Record<string, unknown> = {
    ...reminingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
  });
  return result;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
  updateDinleStudentsFromDB,
};
