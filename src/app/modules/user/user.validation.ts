// import { z } from 'zod';

// const userValidationSchema = z.object({
//   password: z
//     .string({
//       invalid_type_error: 'password must be a string',
//     })
//     .max(20, { message: 'password can not be more tham 20 characters' })
//     .optional(),
// });

// export default userValidationSchema;

//----third modul end--

//---fourth modul start ---

// import { z } from 'zod';

// const userValidationSchema = z.object({
//   password: z
//     .string({
//       invalid_type_error: 'password must be a string',
//     })
//     .max(20, { message: 'password can not be more tham 20 characters' })
//     .optional(),
// });

// export default userValidationSchema;

//---fourth modul end ---

//---five & six modul start ---

import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'password must be a string',
    })
    .max(20, { message: 'password can not be more tham 20 characters' })
    .optional(),
});

export default userValidationSchema;
