// import express from 'express';
// import { userController } from './user.controller';

// const router = express.Router();

// router.post('/', userController.createStudent);

// export const userRoutes = router;

//---third modul end --

//---fourth modul start ---

import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/', userController.createStudent);

export const userRoutes = router;