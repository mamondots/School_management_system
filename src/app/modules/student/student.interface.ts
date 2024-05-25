//----FIRST MODUL START------

// export type UserName = {
//   firstName: string;
//   middleName: string;
//   lastName: string;
// };

// export type Guardian = {
//   fatherName: string;
//   fatherOccupation: string;
//   fatherContactNo: string;
//   motherName: string;
//   motherOccupation: string;
//   motherContactNo: string;
// };

// export type LocalGuardian = {
//   name: string;
//   occupation: string;
//   contactNo: string;
//   address: string;
// };

// export type Student = {
//   id: string;
//   name: UserName;
//   gender: 'male' | 'female';
//   dateOfBirth?: string;
//   email: string;
//   contactNo: string;
//   emergencyContactNo: string;
//   bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
//   presentAddress: string;
//   permanentAddres: string;
//   guardian: Guardian;
//   localGuardian: LocalGuardian;
//   profileImg?: string;
//   isActive: 'active' | 'blocked';
// };

//---FIRST MODUL END---

//---SECOND MODUL START----

//AMAR jodi kono kiso seect kare f2 use kare ta hoile ja change karbo pore project mode ta change hoibe

// import { Model } from 'mongoose';

// export type TUserName = {
//   firstName: string;
//   middleName: string;
//   lastName: string;
// };

// export type TGuardian = {
//   fatherName: string;
//   fatherOccupation: string;
//   fatherContactNo: string;
//   motherName: string;
//   motherOccupation: string;
//   motherContactNo: string;
// };

// export type TLocalGuardian = {
//   name: string;
//   occupation: string;
//   contactNo: string;
//   address: string;
// };

// export type TStudent = {
//   id: string;
//   password: string;
//   name: TUserName;
//   gender: 'male' | 'female';
//   dateOfBirth?: string;
//   email: string;
//   contactNo: string;
//   emergencyContactNo: string;
//   bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
//   presentAddress: string;
//   permanentAddres: string;
//   guardian: TGuardian;
//   localGuardian: TLocalGuardian;
//   profileImg?: string;
//   isActive: 'active' | 'blocked';
//   isDeleted: boolean;
// };

// export interface StudentModel extends Model<TStudent> {
//   isUserExists(id: string): Promise<TStudent>;
// }

//---Second modul end----

import { Model } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddres: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
  isDeleted: boolean;
};

export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent>;
}
