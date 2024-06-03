import catchAsync from '../../utilites/catchAsync';
import { acadimicFaclityService } from './acadimicFaclity.service';

const createAcadimicFaculity = catchAsync(async (req, res) => {
  const result = await acadimicFaclityService.createAcadimicFaculity(req.body);

  res.status(200).json({
    success: true,
    message: 'AcadimicFaclity is created succesfully',
    data: result,
  });
});

const getAllAcadimicFaculity = catchAsync(async (req, res) => {
  const result = await acadimicFaclityService.getAllAcadimicFaculity();

  res.status(200).json({
    success: true,
    message: 'succesfully get all AcadimicFaclity ',
    data: result,
  });
});

const getSingleAcadimicFaculity = catchAsync(async (req, res) => {
  const { AcadimicFaculityID } = req.params;

  const result =
    await acadimicFaclityService.getSingleAcadimicFaculity(AcadimicFaculityID);

  res.status(200).json({
    success: true,
    message: 'succesfully get single AcadimicFaclity ',
    data: result,
  });
});

const updateAcadimicFaculity = catchAsync(async (req, res) => {
  const { AcadimicFaculityID } = req.params;
  const result = await acadimicFaclityService.updateAcadimicFaculity(
    AcadimicFaculityID,
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'succesfully update AcadimicFaclity ',
    data: result,
  });
});

export const acadimicFaclityController = {
  createAcadimicFaculity,
  getAllAcadimicFaculity,
  getSingleAcadimicFaculity,
  updateAcadimicFaculity,
};
