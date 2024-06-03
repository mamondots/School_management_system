import express from 'express';
import { acadimicFaclityController } from './acadimicFaclity.controller';

const router = express.Router();

router.post('/', acadimicFaclityController.createAcadimicFaculity);
router.get('/', acadimicFaclityController.getAllAcadimicFaculity);
router.get(
  '/:AcadimicFaculityID',
  acadimicFaclityController.getSingleAcadimicFaculity,
);
router.patch(
  '/:AcadimicFaculityID',
  acadimicFaclityController.updateAcadimicFaculity,
);

export const AcadimicFaclityRouter = router;
