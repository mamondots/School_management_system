import { Schema, model } from 'mongoose';
import { TAcadimicDepartment } from './acadimicDepartment.interface';

const acadimicDepartmentSchema = new Schema<TAcadimicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcadimicFaclity',
    },
  },
  {
    timestamps: true,
  },
);

//error extrent

class AppError extends Error {
  public statusCode: number;
  constructor(statusCode: number, message: string, stack = '') {
    super(message);
    this.statusCode = statusCode;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

//for reduce duolicut name or send error message

acadimicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await AcadimicDepartment.findOne({
    name: this.name,
  });

  if (isDepartmentExist) {
    throw new Error('This department already exist');
  }
  next();
});

//for show update error message and not update when id no match

acadimicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await AcadimicDepartment.findOne(query);

  if (!isDepartmentExist) {
    throw new AppError(400, 'This department did not exist!');
  }

  next();
});

export const AcadimicDepartment = model<TAcadimicDepartment>(
  'AcadimicDepartment',
  acadimicDepartmentSchema,
);
