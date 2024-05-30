// import { TAcadimicSemester } from './acadimicSemester.interface';
// import { AcadimicSemester } from './acadimicSemester.model';

// const createAcadimicSemesterInToBd = async (payLoad: TAcadimicSemester) => {
//   type TAcadimicSemesterNameCodeMaper = {
//     [key: string]: string;
//   };

//   const acadimicSemesterNameCodeMaper: TAcadimicSemesterNameCodeMaper = {
//     Autumn: '01',
//     Summer: '02',
//     Fall: '03',
//   };

//   if (acadimicSemesterNameCodeMaper[payLoad.name] !== payLoad.code) {
//     throw new Error('Invialid semester code');
//   }

//   const result = await AcadimicSemester.create(payLoad);
//   return result;
// };

// const getAllAcadimicSemester = async () => {
//   const result = await AcadimicSemester.find();
//   return result;
// };

// const singleAcadimicSemester = async (id: string) => {
//   const result = await AcadimicSemester.findById(id);
//   return result;
// };

// const updateAcadimicSemester = async (
//   id: string,
//   payLoad: Partial<TAcadimicSemester>,
// ) => {
//   type TAcadimicSemesterNameCodeMaper = {
//     [key: string]: string;
//   };

//   const acadimicSemesterNameCodeMaper: TAcadimicSemesterNameCodeMaper = {
//     Autumn: '01',
//     Summer: '02',
//     Fall: '03',
//   };

//   if (
//     payLoad.name &&
//     payLoad.code &&
//     acadimicSemesterNameCodeMaper[payLoad.name] !== payLoad.code
//   ) {
//     throw new Error('Invalid Semester Code');
//   }

//   const result = await AcadimicSemester.findOneAndUpdate({ _id: id }, payLoad, {
//     new: true,
//   });
//   return result;
// };

// export const AcadimicSemesterService = {
//   createAcadimicSemesterInToBd,
//   getAllAcadimicSemester,
//   singleAcadimicSemester,
//   updateAcadimicSemester,
// };

//---fourth modul end--

//--five modul start --

import { TAcadimicSemester } from './acadimicSemester.interface';
import { AcadimicSemester } from './acadimicSemester.model';

const createAcadimicSemesterInToBd = async (payLoad: TAcadimicSemester) => {
  type TAcadimicSemesterNameCodeMaper = {
    [key: string]: string;
  };

  const acadimicSemesterNameCodeMaper: TAcadimicSemesterNameCodeMaper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };

  if (acadimicSemesterNameCodeMaper[payLoad.name] !== payLoad.code) {
    throw new Error('Invialid semester code');
  }

  const result = await AcadimicSemester.create(payLoad);
  return result;
};

const getAllAcadimicSemester = async () => {
  const result = await AcadimicSemester.find();
  return result;
};

const singleAcadimicSemester = async (id: string) => {
  const result = await AcadimicSemester.findById(id);
  return result;
};

const updateAcadimicSemester = async (
  id: string,
  payLoad: Partial<TAcadimicSemester>,
) => {
  type TAcadimicSemesterNameCodeMaper = {
    [key: string]: string;
  };

  const acadimicSemesterNameCodeMaper: TAcadimicSemesterNameCodeMaper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };

  if (
    payLoad.name &&
    payLoad.code &&
    acadimicSemesterNameCodeMaper[payLoad.name] !== payLoad.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcadimicSemester.findOneAndUpdate({ _id: id }, payLoad, {
    new: true,
  });
  return result;
};

export const AcadimicSemesterService = {
  createAcadimicSemesterInToBd,
  getAllAcadimicSemester,
  singleAcadimicSemester,
  updateAcadimicSemester,
};
