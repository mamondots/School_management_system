import catchAsync from '../../utilites/catchAsync';
import { acadimicDepartmentService } from './acadimicDepartment.service';

const createAcadimicDepartment = catchAsync(async (req, res) => {
  const result = await acadimicDepartmentService.createAcadimicDepartment(
    req.body,
  );

  res.status(200).json({
    success: true,
    message: 'Acadimic Department create succesfully',
    data: result,
  });
});

const getAllAcadimicDepartment = catchAsync(async (req, res) => {
  const result = await acadimicDepartmentService.getAllAcadimicDepartment();
  res.status(200).json({
    success: true,
    message: 'get all Acadimic Department  succesfully',
    data: result,
  });
});

const getSingleAcadimicDepartment = catchAsync(async (req, res) => {
  const { DepartmentID } = req.params;
  const result =
    await acadimicDepartmentService.getSingeAcadimicDepartment(DepartmentID);
  res.status(200).json({
    success: true,
    message: 'get single Acadimic Department  succesfully',
    data: result,
  });
});

const updateSingleAcadimicDepartment = catchAsync(async (req, res) => {
  const { DepartmentID } = req.params;
  const result = await acadimicDepartmentService.updateAcadimicDepartment(
    DepartmentID,
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'update single Acadimic Department  succesfully',
    data: result,
  });
});

export const acadimicDepartmentController = {
  createAcadimicDepartment,
  getAllAcadimicDepartment,
  getSingleAcadimicDepartment,
  updateSingleAcadimicDepartment,
};
