import express from 'express';
import { acadimicDepartmentController } from './acadimicDepartment.controller';

const router = express.Router();

router.post('/', acadimicDepartmentController.createAcadimicDepartment);
router.get('/', acadimicDepartmentController.getAllAcadimicDepartment);
router.get(
  '/:DepartmentID',
  acadimicDepartmentController.getSingleAcadimicDepartment,
);
router.patch(
  '/:DepartmentID',
  acadimicDepartmentController.updateSingleAcadimicDepartment,
);

export const AcadimicDepartmentRouter = router;
