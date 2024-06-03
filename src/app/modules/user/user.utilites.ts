// import { TAcadimicSemester } from '../acadimicSemester/acadimicSemester.interface';
// import { User } from './user.model';

// const finalLastStudentID = async () => {
//   const lastStudent = await User.findOne(
//     {
//       role: 'student',
//     },
//     {
//       id: 1,
//       _id: 0,
//     },
//   )
//     .sort({
//       createdAt: -1,
//     })
//     .lean();

//   return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
// };

// export const generateStudentID = async (payLoad: TAcadimicSemester) => {
//   const currentId = (await finalLastStudentID()) || (0).toString();

//   let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
//   incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;
//   return incrementId;
// };

//---fourth modul end --

//--five & six modul start--

import { TAcadimicSemester } from '../acadimicSemester/acadimicSemester.interface';
import { User } from './user.model';

const finalLastStudentID = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  // return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentID = async (payLoad: TAcadimicSemester) => {
  let currentId = (0).toString(); //default 0000

  const lastStudendId = await finalLastStudentID();
  //2030 01 0000
  const lastStudentSemesterCode = lastStudendId?.substring(4, 6); //01
  const lastStudentYear = lastStudendId?.substring(0, 4); //2030

  const currentSemesterCode = payLoad.code;
  const currentYear = payLoad.year;

  if (
    lastStudendId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudendId.substring(6);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;
  return incrementId;
};
