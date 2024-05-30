// import { Schema, model } from 'mongoose';
// import { Tuser } from './user.interface';
// import config from '../../config';
// import bcrypt from 'bcrypt';
// const userSchema = new Schema<Tuser>(
//   {
//     id: { type: String, required: true },
//     password: { type: String, required: true },
//     needsPasswordChange: { type: Boolean, default: true },
//     role: {
//       type: String,
//       enum: ['admin', 'student', 'faculty'],
//     },
//     status: {
//       type: String,
//       enum: ['in-progress', 'blocked'],
//       default: 'in-progress',
//     },
//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// userSchema.pre('find', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// //pre save middleware/hook

// userSchema.pre('save', async function (next) {
//   // console.log(this, 'pre hook: this is work before create data');

//   const user = this; // e khane this bolte document ke bujai

//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_round),
//   );
//   next();
// });

// userSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

// export const User = model<Tuser>('User', userSchema);

//----third modul end ---

//---fourth modul start ---

// import { Schema, model } from 'mongoose';
// import { Tuser } from './user.interface';
// import config from '../../config';
// import bcrypt from 'bcrypt';
// const userSchema = new Schema<Tuser>(
//   {
//     id: { type: String, required: true },
//     password: { type: String, required: true },
//     needsPasswordChange: { type: Boolean, default: true },
//     role: {
//       type: String,
//       enum: ['admin', 'student', 'faculty'],
//     },
//     status: {
//       type: String,
//       enum: ['in-progress', 'blocked'],
//       default: 'in-progress',
//     },
//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// userSchema.pre('find', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// //pre save middleware/hook

// userSchema.pre('save', async function (next) {
//   // console.log(this, 'pre hook: this is work before create data');

//   const user = this; // e khane this bolte document ke bujai

//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_round),
//   );
//   next();
// });

// userSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

// export const User = model<Tuser>('User', userSchema);

//---fourth modul end ---

//---five modul start---

import { Schema, model } from 'mongoose';
import { Tuser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
const userSchema = new Schema<Tuser>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
    needsPasswordChange: { type: Boolean, default: true },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

//pre save middleware/hook

userSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook: this is work before create data');

  const user = this; // e khane this bolte document ke bujai

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<Tuser>('User', userSchema);
