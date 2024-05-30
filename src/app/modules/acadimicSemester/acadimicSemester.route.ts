// import express from 'express';
// import { acadimicSemesterController } from './acadimicSemester.controller';
// const router = express.Router();

// router.post('/', acadimicSemesterController.createAcadimicSemester);
// router.get('/', acadimicSemesterController.getAcadiminSemester);
// router.get(
//   '/:semesterID',
//   acadimicSemesterController.getSingleAcadiminSemester,
// );
// router.patch(
//   '/:semesterID',
//   acadimicSemesterController.updateSingleAcadiminSemester,
// );

// export const AcadimicSemesterRoute = router;

//--fourth modul end ---

//five modul start ---

import express from 'express';
import { acadimicSemesterController } from './acadimicSemester.controller';
const router = express.Router();

router.post('/', acadimicSemesterController.createAcadimicSemester);
router.get('/', acadimicSemesterController.getAcadiminSemester);
router.get(
  '/:semesterID',
  acadimicSemesterController.getSingleAcadiminSemester,
);
router.patch(
  '/:semesterID',
  acadimicSemesterController.updateSingleAcadiminSemester,
);

export const AcadimicSemesterRoute = router;
