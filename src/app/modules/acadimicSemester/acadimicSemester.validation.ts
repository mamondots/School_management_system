// import { z } from 'zod';
// import {
//   AcadimicSemesterCode,
//   AcadimicSemesterName,
//   AcadiminMoths,
// } from './acadimicSenester.contast';

// const createAcadimicSemesterVakidationSchema = z.object({
//   name: z.enum([...AcadimicSemesterName] as [string, ...string[]]),
//   code: z.enum([...AcadimicSemesterCode] as [string, ...string[]]),
//   year: z.string(),
//   startMonth: z.enum([...AcadiminMoths] as [string, ...string[]]),
//   endMonth: z.enum([...AcadiminMoths] as [string, ...string[]]),
// });

// export const AcadimicSemesterValidation = {
//   createAcadimicSemesterVakidationSchema,
// };

//--fourt modul end --

//--five modul end --

import { z } from 'zod';
import {
  AcadimicSemesterCode,
  AcadimicSemesterName,
  AcadiminMoths,
} from './acadimicSenester.contast';

const createAcadimicSemesterVakidationSchema = z.object({
  name: z.enum([...AcadimicSemesterName] as [string, ...string[]]),
  code: z.enum([...AcadimicSemesterCode] as [string, ...string[]]),
  year: z.string(),
  startMonth: z.enum([...AcadiminMoths] as [string, ...string[]]),
  endMonth: z.enum([...AcadiminMoths] as [string, ...string[]]),
});

export const AcadimicSemesterValidation = {
  createAcadimicSemesterVakidationSchema,
};
