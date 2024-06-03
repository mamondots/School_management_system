import { z } from 'zod';

const acadimicFaclityValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Acadimic facauly must be string',
  }),
});

export const AcadimicFaclityValidation = {
  acadimicFaclityValidationSchema,
};
