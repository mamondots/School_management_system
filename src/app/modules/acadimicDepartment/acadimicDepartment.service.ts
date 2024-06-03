import { TAcadimicDepartment } from './acadimicDepartment.interface';
import { AcadimicDepartment } from './acadimicDepartment.model';

const createAcadimicDepartment = async (payload: TAcadimicDepartment) => {
  const result = await AcadimicDepartment.create(payload);
  return result;
};

const getAllAcadimicDepartment = async () => {
  const result = await AcadimicDepartment.find().populate('academicFaculty');
  return result;
};

const getSingeAcadimicDepartment = async (id: string) => {
  const result = await AcadimicDepartment.findById(id);
  return result;
};

const updateAcadimicDepartment = async (
  id: string,
  payload: Partial<TAcadimicDepartment>,
) => {
  const result = await AcadimicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return result;
};

export const acadimicDepartmentService = {
  createAcadimicDepartment,
  getAllAcadimicDepartment,
  getSingeAcadimicDepartment,
  updateAcadimicDepartment,
};
