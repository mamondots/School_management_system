//----FIRST MODUL START

// import express from 'express';
// import { StudentControllers } from './student.controller';

// const router = express.Router();

// router.post('/', StudentControllers.createStudent);
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);

// export const StudentRoutes = router;

//---FIRST MODUL END---

//second modul start---

// import express from 'express';
// import { StudentControllers } from './student.controller';

// const router = express.Router();

// router.post('/', StudentControllers.createStudent);
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);
// router.delete('/:studentId', StudentControllers.deleteSingleStudent);

// export const StudentRoutes = router;

//---second modul end -----

//---third modul start---

// import express from 'express';
// import { StudentControllers } from './student.controller';

// const router = express.Router();

// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);
// router.delete('/:studentId', StudentControllers.deleteSingleStudent);

// export const StudentRoutes = router;

//---third modul end ---

//---fourth modul start ---

// import express from 'express';
// import { StudentControllers } from './student.controller';

// const router = express.Router();

// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);
// router.delete('/:studentId', StudentControllers.deleteSingleStudent);

// export const StudentRoutes = router;

//---fourth modul end ---

//--five modul start ---

import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);
router.delete('/:studentId', StudentControllers.deleteSingleStudent);

export const StudentRoutes = router;
