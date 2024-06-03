//---FIRST MODUL END

// import { Schema, model } from 'mongoose';
// import {
//   Guardian,
//   LocalGuardian,
//   Student,
//   UserName,
// } from './student.interface';

// const userNameSchema = new Schema<UserName>({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   middleName: {
//     type: String,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
// });

// const guardianSchema = new Schema<Guardian>({
//   fatherName: {
//     type: String,
//     required: true,
//   },
//   fatherOccupation: {
//     type: String,
//     required: true,
//   },
//   fatherContactNo: {
//     type: String,
//     required: true,
//   },
//   motherName: {
//     type: String,
//     required: true,
//   },
//   motherOccupation: {
//     type: String,
//     required: true,
//   },
//   motherContactNo: {
//     type: String,
//     required: true,
//   },
// });

// const localGuradianSchema = new Schema<LocalGuardian>({
//   name: {
//     type: String,
//     required: true,
//   },
//   occupation: {
//     type: String,
//     required: true,
//   },
//   contactNo: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
// });

// const studentSchema = new Schema<Student>({
//   id: { type: String },
//   name: userNameSchema,
//   gender: {
//     type: String,
//     enum: ['male', 'female'],
//   },
//   dateOfBirth: { type: String },
//   email: { type: String, required: true },
//   contactNo: { type: String, required: true },
//   emergencyContactNo: { type: String, required: true },
//   bloogGroup: {
//     type: String,
//     enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
//   },

//   presentAddress: { type: String, required: true },
//   permanentAddres: { type: String, required: true },
//   guardian: guardianSchema,
//   localGuardian: localGuradianSchema,
//   profileImg: { type: String },
//   isActive: ['active', 'blocked'],
// });

// export const StudentModel = model<Student>('Student', studentSchema);

//---FIRST MODUL EDN ------

//---second model start -----

// import { Schema, model } from 'mongoose';
// import {
//   StudentModel,
//   TGuardian,
//   TLocalGuardian,
//   TStudent,
//   TUserName,
// } from './student.interface';

// import bcrypt from 'bcrypt';
// import config from '../../config';

// const userNameSchema = new Schema<TUserName>({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   middleName: {
//     type: String,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
// });

// const guardianSchema = new Schema<TGuardian>({
//   fatherName: {
//     type: String,
//     required: true,
//   },
//   fatherOccupation: {
//     type: String,
//     required: true,
//   },
//   fatherContactNo: {
//     type: String,
//     required: true,
//   },
//   motherName: {
//     type: String,
//     required: true,
//   },
//   motherOccupation: {
//     type: String,
//     required: true,
//   },
//   motherContactNo: {
//     type: String,
//     required: true,
//   },
// });

// const localGuradianSchema = new Schema<TLocalGuardian>({
//   name: {
//     type: String,
//     required: true,
//   },
//   occupation: {
//     type: String,
//     required: true,
//   },
//   contactNo: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
// });

// const studentSchema = new Schema<TStudent, StudentModel>(
//   {
//     id: { type: String, unique: true },
//     password: { type: String },
//     name: userNameSchema,
//     gender: {
//       type: String,
//       enum: ['male', 'female'],
//     },
//     dateOfBirth: { type: String },
//     email: { type: String, required: true },
//     contactNo: { type: String, required: true },
//     emergencyContactNo: { type: String, required: true },
//     bloogGroup: {
//       type: String,
//       enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
//     },

//     presentAddress: { type: String, required: true },
//     permanentAddres: { type: String, required: true },
//     guardian: guardianSchema,
//     localGuardian: localGuradianSchema,
//     profileImg: { type: String },
//     isActive: ['active', 'blocked'],
//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   },
// );

// //mongoose virtual

// studentSchema.virtual('fullName').get(function () {
//   return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
// });

// //query middlewear hook

// studentSchema.pre('find', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// //pre save middleware/hook

// studentSchema.pre('save', async function (next) {
//   // console.log(this, 'pre hook: this is work before create data');

//   const user = this; // e khane this bolte document ke bujai

//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_round),
//   );
//   next();
// });

// studentSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

// studentSchema.statics.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

// export const Student = model<TStudent>('Student', studentSchema);

//---seond modul end -----

//---third modul start ----

// import { Schema, model } from 'mongoose';
// import {
//   StudentModel,
//   TGuardian,
//   TLocalGuardian,
//   TStudent,
//   TUserName,
// } from './student.interface';

// // import bcrypt from 'bcrypt';
// // import config from '../../config';

// const userNameSchema = new Schema<TUserName>({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   middleName: {
//     type: String,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
// });

// const guardianSchema = new Schema<TGuardian>({
//   fatherName: {
//     type: String,
//     required: true,
//   },
//   fatherOccupation: {
//     type: String,
//     required: true,
//   },
//   fatherContactNo: {
//     type: String,
//     required: true,
//   },
//   motherName: {
//     type: String,
//     required: true,
//   },
//   motherOccupation: {
//     type: String,
//     required: true,
//   },
//   motherContactNo: {
//     type: String,
//     required: true,
//   },
// });

// const localGuradianSchema = new Schema<TLocalGuardian>({
//   name: {
//     type: String,
//     required: true,
//   },
//   occupation: {
//     type: String,
//     required: true,
//   },
//   contactNo: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
// });

// const studentSchema = new Schema<TStudent, StudentModel>(
//   {
//     id: { type: String, required: [true, 'Id must be'], unique: true },
//     user: {
//       type: Schema.Types.ObjectId,
//       required: [true, 'user must be'],
//       unique: true,
//       ref: 'User',
//     },
//     name: userNameSchema,
//     gender: {
//       type: String,
//       enum: ['male', 'female'],
//     },
//     dateOfBirth: { type: String },
//     email: { type: String, required: true },
//     contactNo: { type: String, required: true },
//     emergencyContactNo: { type: String, required: true },
//     bloogGroup: {
//       type: String,
//       enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
//     },

//     presentAddress: { type: String, required: true },
//     permanentAddres: { type: String, required: true },
//     guardian: guardianSchema,
//     localGuardian: localGuradianSchema,
//     profileImg: { type: String },
//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   },
// );

// //mongoose virtual

// studentSchema.virtual('fullName').get(function () {
//   return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
// });

// //query middlewear hook

// // studentSchema.pre('find', function (next) {
// //   this.find({ isDeleted: { $ne: true } });
// //   next();
// // });

// // //pre save middleware/hook

// // studentSchema.pre('save', async function (next) {
// //   // console.log(this, 'pre hook: this is work before create data');

// //   const user = this; // e khane this bolte document ke bujai

// //   user.password = await bcrypt.hash(
// //     user.password,
// //     Number(config.bcrypt_salt_round),
// //   );
// //   next();
// // });

// // studentSchema.post('save', function (doc, next) {
// //   doc.password = '';
// //   next();
// // });

// studentSchema.statics.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

// export const Student = model<TStudent>('Student', studentSchema);

//----third modul end ---

//----fourt modul start---

// import { Schema, model } from 'mongoose';
// import {
//   StudentModel,
//   TGuardian,
//   TLocalGuardian,
//   TStudent,
//   TUserName,
// } from './student.interface';

// // import bcrypt from 'bcrypt';
// // import config from '../../config';

// const userNameSchema = new Schema<TUserName>({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   middleName: {
//     type: String,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
// });

// const guardianSchema = new Schema<TGuardian>({
//   fatherName: {
//     type: String,
//     required: true,
//   },
//   fatherOccupation: {
//     type: String,
//     required: true,
//   },
//   fatherContactNo: {
//     type: String,
//     required: true,
//   },
//   motherName: {
//     type: String,
//     required: true,
//   },
//   motherOccupation: {
//     type: String,
//     required: true,
//   },
//   motherContactNo: {
//     type: String,
//     required: true,
//   },
// });

// const localGuradianSchema = new Schema<TLocalGuardian>({
//   name: {
//     type: String,
//     required: true,
//   },
//   occupation: {
//     type: String,
//     required: true,
//   },
//   contactNo: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
// });

// const studentSchema = new Schema<TStudent, StudentModel>(
//   {
//     id: { type: String, required: [true, 'Id must be'], unique: true },
//     user: {
//       type: Schema.Types.ObjectId,
//       required: [true, 'user must be'],
//       unique: true,
//       ref: 'User',
//     },
//     name: userNameSchema,
//     gender: {
//       type: String,
//       enum: ['male', 'female'],
//     },
//     dateOfBirth: { type: Date },
//     email: { type: String, required: true },
//     contactNo: { type: String, required: true },
//     emergencyContactNo: { type: String, required: true },
//     bloogGroup: {
//       type: String,
//       enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
//     },

//     presentAddress: { type: String, required: true },
//     permanentAddres: { type: String, required: true },
//     guardian: guardianSchema,
//     localGuardian: localGuradianSchema,
//     admissionSemester: {
//       type: Schema.Types.ObjectId,
//       ref: 'AcadimicSemester',
//     },
//     profileImg: { type: String },
//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   },
// );

// //mongoose virtual

// studentSchema.virtual('fullName').get(function () {
//   return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
// });

// //query middlewear hook

// // studentSchema.pre('find', function (next) {
// //   this.find({ isDeleted: { $ne: true } });
// //   next();
// // });

// // //pre save middleware/hook

// // studentSchema.pre('save', async function (next) {
// //   // console.log(this, 'pre hook: this is work before create data');

// //   const user = this; // e khane this bolte document ke bujai

// //   user.password = await bcrypt.hash(
// //     user.password,
// //     Number(config.bcrypt_salt_round),
// //   );
// //   next();
// // });

// // studentSchema.post('save', function (doc, next) {
// //   doc.password = '';
// //   next();
// // });

// studentSchema.statics.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

// export const Student = model<TStudent>('Student', studentSchema);

//---fouth modul end ---

//--five modul start ---

// import { Schema, model } from 'mongoose';
// import {
//   StudentModel,
//   TGuardian,
//   TLocalGuardian,
//   TStudent,
//   TUserName,
// } from './student.interface';

// // import bcrypt from 'bcrypt';
// // import config from '../../config';

// const userNameSchema = new Schema<TUserName>({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   middleName: {
//     type: String,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
// });

// const guardianSchema = new Schema<TGuardian>({
//   fatherName: {
//     type: String,
//     required: true,
//   },
//   fatherOccupation: {
//     type: String,
//     required: true,
//   },
//   fatherContactNo: {
//     type: String,
//     required: true,
//   },
//   motherName: {
//     type: String,
//     required: true,
//   },
//   motherOccupation: {
//     type: String,
//     required: true,
//   },
//   motherContactNo: {
//     type: String,
//     required: true,
//   },
// });

// const localGuradianSchema = new Schema<TLocalGuardian>({
//   name: {
//     type: String,
//     required: true,
//   },
//   occupation: {
//     type: String,
//     required: true,
//   },
//   contactNo: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
// });

// const studentSchema = new Schema<TStudent, StudentModel>(
//   {
//     id: { type: String, required: [true, 'Id must be'], unique: true },
//     user: {
//       type: Schema.Types.ObjectId,
//       required: [true, 'user must be'],
//       unique: true,
//       ref: 'User',
//     },
//     name: userNameSchema,
//     gender: {
//       type: String,
//       enum: ['male', 'female'],
//     },
//     dateOfBirth: { type: Date },
//     email: { type: String, required: true },
//     contactNo: { type: String, required: true },
//     emergencyContactNo: { type: String, required: true },
//     bloogGroup: {
//       type: String,
//       enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
//     },

//     presentAddress: { type: String, required: true },
//     permanentAddres: { type: String, required: true },
//     guardian: guardianSchema,
//     localGuardian: localGuradianSchema,
//     admissionSemester: {
//       type: Schema.Types.ObjectId,
//       ref: 'AcadimicSemester',
//     },
//     admissionDepartment: {
//       type: Schema.Types.ObjectId,
//       ref: 'AcadimicDepartment',
//     },
//     profileImg: { type: String },
//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   },
// );

// //mongoose virtual

// studentSchema.virtual('fullName').get(function () {
//   return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
// });

// //query middlewear hook

// // studentSchema.pre('find', function (next) {
// //   this.find({ isDeleted: { $ne: true } });
// //   next();
// // });

// // //pre save middleware/hook

// // studentSchema.pre('save', async function (next) {
// //   // console.log(this, 'pre hook: this is work before create data');

// //   const user = this; // e khane this bolte document ke bujai

// //   user.password = await bcrypt.hash(
// //     user.password,
// //     Number(config.bcrypt_salt_round),
// //   );
// //   next();
// // });

// // studentSchema.post('save', function (doc, next) {
// //   doc.password = '';
// //   next();
// // });

// studentSchema.statics.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

// export const Student = model<TStudent>('Student', studentSchema);

//--five modul end ---

//--six modul start ---

import { Schema, model } from 'mongoose';
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

// import bcrypt from 'bcrypt';
// import config from '../../config';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: [true, 'Id must be'], unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'user must be'],
      unique: true,
      ref: 'User',
    },
    name: userNameSchema,
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    dateOfBirth: { type: Date },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloogGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },

    presentAddress: { type: String, required: true },
    permanentAddres: { type: String, required: true },
    guardian: guardianSchema,
    localGuardian: localGuradianSchema,
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcadimicSemester',
    },
    admissionDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcadimicDepartment',
    },
    profileImg: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

//mongoose virtual

studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

//query middlewear hook

// studentSchema.pre('find', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// //pre save middleware/hook

// studentSchema.pre('save', async function (next) {
//   // console.log(this, 'pre hook: this is work before create data');

//   const user = this; // e khane this bolte document ke bujai

//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_round),
//   );
//   next();
// });

// studentSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent>('Student', studentSchema);
