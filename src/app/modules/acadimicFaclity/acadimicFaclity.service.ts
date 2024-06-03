import { TAcadimicFaclity } from './acadimicFaclity.interface';
import { AcadimicFaclity } from './acadimicFaclity.model';

const createAcadimicFaculity = async (payload: TAcadimicFaclity) => {
  const result = await AcadimicFaclity.create(payload);
  return result;
};

const getAllAcadimicFaculity = async () => {
  const result = await AcadimicFaclity.find();
  return result;
};

const getSingleAcadimicFaculity = async (id: string) => {
  const result = await AcadimicFaclity.findById(id);
  return result;
};

const updateAcadimicFaculity = async (
  id: string,
  payload: Partial<TAcadimicFaclity>,
) => {
  const result = await AcadimicFaclity.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

export const acadimicFaclityService = {
  createAcadimicFaculity,
  getAllAcadimicFaculity,
  getSingleAcadimicFaculity,
  updateAcadimicFaculity,
};
