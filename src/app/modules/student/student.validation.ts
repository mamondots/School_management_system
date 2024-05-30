//----first modul have no validation---

//--second,third modul modul start ---

// import { z } from 'zod';

// const userNameSchema = z.object({
//   firstName: z.string().min(1).max(20),
//   // .refine((value) => /^[A-Z]/.test(value), {
//   //   message: 'First Name must start with a capital letter',
//   // }),
//   middleName: z.string(),
//   lastName: z.string(),
// });

// const guardianSchema = z.object({
//   fatherName: z.string(),
//   fatherOccupation: z.string(),
//   fatherContactNo: z.string(),
//   motherName: z.string(),
//   motherOccupation: z.string(),
//   motherContactNo: z.string(),
// });

// const localGuardianSchema = z.object({
//   name: z.string(),
//   occupation: z.string(),
//   contactNo: z.string(),
//   address: z.string(),
// });

// export const studentValidationSchema = z.object({
//   id: z.string(),
//   password: z.string().max(20),
//   name: userNameSchema,
//   gender: z.enum(['male', 'female']),
//   dateOfBirth: z.string(),
//   email: z.string().email(),
//   contactNo: z.string(),
//   emergencyContactNo: z.string(),
//   bloogGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
//   presentAddress: z.string(),
//   permanentAddres: z.string(),
//   guardian: guardianSchema,
//   localGuardian: localGuardianSchema,
//   profileImg: z.string(),
//   isActive: z.enum(['active', 'blocked']).default('active'),
//   isDeleted: z.boolean().optional().default(false),
// });

// export default studentValidationSchema;

//--second,third modul modul end ---

//---fourt modul start---

// import { z } from 'zod';

// const userNameSchema = z.object({
//   firstName: z.string().min(1).max(20),
//   // .refine((value) => /^[A-Z]/.test(value), {
//   //   message: 'First Name must start with a capital letter',
//   // }),
//   middleName: z.string(),
//   lastName: z.string(),
// });

// const guardianSchema = z.object({
//   fatherName: z.string(),
//   fatherOccupation: z.string(),
//   fatherContactNo: z.string(),
//   motherName: z.string(),
//   motherOccupation: z.string(),
//   motherContactNo: z.string(),
// });

// const localGuardianSchema = z.object({
//   name: z.string(),
//   occupation: z.string(),
//   contactNo: z.string(),
//   address: z.string(),
// });

// export const studentValidationSchema = z.object({
//   id: z.string(),
//   password: z.string().max(20),
//   name: userNameSchema,
//   gender: z.enum(['male', 'female']),
//   dateOfBirth: z.date().optional(),
//   email: z.string().email(),
//   contactNo: z.string(),
//   emergencyContactNo: z.string(),
//   bloogGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
//   presentAddress: z.string(),
//   permanentAddres: z.string(),
//   guardian: guardianSchema,
//   localGuardian: localGuardianSchema,
//   admissionSemester: z.string(),
//   profileImg: z.string(),
//   isActive: z.enum(['active', 'blocked']).default('active'),
//   isDeleted: z.boolean().optional().default(false),
// });

// export default studentValidationSchema;

//---fourth modul end --

//--- five modul start---

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
