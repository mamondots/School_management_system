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

//--five modul start--

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

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

export const generateStudentID = async (payLoad: TAcadimicSemester) => {
  const currentId = (await finalLastStudentID()) || (0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;
  return incrementId;
};
