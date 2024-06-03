import { Schema, model } from 'mongoose';
import { TAcadimicFaclity } from './acadimicFaclity.interface';

const acadimicFaclitySchema = new Schema<TAcadimicFaclity>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AcadimicFaclity = model<TAcadimicFaclity>(
  'AcadimicFaclity',
  acadimicFaclitySchema,
);
