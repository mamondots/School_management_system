import { Types } from 'mongoose';

export type TAcadimicDepartment = {
  name: string;
  academicFaculty: Types.ObjectId;
};
