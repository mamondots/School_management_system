// import { Schema, model } from 'mongoose';
// import { TAcadimicSemester } from './acadimicSemester.interface';
// import {
//   AcadimicSemesterCode,
//   AcadimicSemesterName,
//   AcadiminMoths,
// } from './acadimicSenester.contast';

// const acadimicSemesterSchema = new Schema<TAcadimicSemester>(
//   {
//     name: { type: String, enum: AcadimicSemesterName, required: true },
//     code: { type: String, enum: AcadimicSemesterCode, required: true },
//     year: { type: String, required: true },
//     startMonth: {
//       type: 'String',
//       enum: AcadiminMoths,
//       required: true,
//     },
//     endMonth: {
//       type: 'String',
//       enum: AcadiminMoths,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// acadimicSemesterSchema.pre('save', async function (next) {
//   const isSemesterExits = await AcadimicSemester.findOne({
//     year: this.year,
//     name: this.name,
//   });

//   if (isSemesterExits) {
//     throw new Error('Semester is already exits');
//   }
//   next();
// });

// export const AcadimicSemester = model<TAcadimicSemester>(
//   'AcadimicSemester',
//   acadimicSemesterSchema,
// );

//---fourth modul end ---

//---five modul start--

import { Schema, model } from 'mongoose';
import { TAcadimicSemester } from './acadimicSemester.interface';
import {
  AcadimicSemesterCode,
  AcadimicSemesterName,
  AcadiminMoths,
} from './acadimicSenester.contast';

const acadimicSemesterSchema = new Schema<TAcadimicSemester>(
  {
    name: { type: String, enum: AcadimicSemesterName, required: true },
    code: { type: String, enum: AcadimicSemesterCode, required: true },
    year: { type: String, required: true },
    startMonth: {
      type: 'String',
      enum: AcadiminMoths,
      required: true,
    },
    endMonth: {
      type: 'String',
      enum: AcadiminMoths,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

acadimicSemesterSchema.pre('save', async function (next) {
  const isSemesterExits = await AcadimicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExits) {
    throw new Error('Semester is already exits');
  }
  next();
});

export const AcadimicSemester = model<TAcadimicSemester>(
  'AcadimicSemester',
  acadimicSemesterSchema,
);
