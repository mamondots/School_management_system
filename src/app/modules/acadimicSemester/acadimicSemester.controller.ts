// import catchAsync from '../../utilites/catchAsync';
// import { AcadimicSemesterService } from './acadimicSemester.service';

// const createAcadimicSemester = catchAsync(async (req, res, next) => {
//   //   const { password, student: studentData } = req.body;

//   //zod validation

//   // const zodparsedData = studentValidationSchema.parse(studentData);

//   const AcadimicData = req.body;

//   console.log(AcadimicData);

//   const result =
//     await AcadimicSemesterService.createAcadimicSemesterInToBd(AcadimicData);

//   res.status(200).json({
//     success: true,
//     message: 'Acadimic senester is created succesfully',
//     data: result,
//   });
// });

// const getAcadiminSemester = catchAsync(async (req, res, next) => {
//   const result = await AcadimicSemesterService.getAllAcadimicSemester();
//   res.status(200).json({
//     success: true,
//     message: 'Acadimic Semester are retrieved succesfully',
//     data: result,
//   });
// });

// const getSingleAcadiminSemester = catchAsync(async (req, res, next) => {
//   const { semesterID } = req.params;
//   const result =
//     await AcadimicSemesterService.singleAcadimicSemester(semesterID);
//   res.status(200).json({
//     success: true,
//     message: 'single Acadimic Semester are  succesfully find',
//     data: result,
//   });
// });

// const updateSingleAcadiminSemester = catchAsync(async (req, res, next) => {
//   const { semesterID } = req.params;
//   const updateSemester = req.body;
//   const result = await AcadimicSemesterService.updateAcadimicSemester(
//     semesterID,
//     updateSemester,
//   );
//   res.status(200).json({
//     success: true,
//     message: ' Acadimic Semester are updated  succesfully',
//     data: result,
//   });
// });

// export const acadimicSemesterController = {
//   createAcadimicSemester,
//   getAcadiminSemester,
//   getSingleAcadiminSemester,
//   updateSingleAcadiminSemester,
// };

///---fourth modul end --

//--five modul start ---

import catchAsync from '../../utilites/catchAsync';
import { AcadimicSemesterService } from './acadimicSemester.service';

const createAcadimicSemester = catchAsync(async (req, res, next) => {
  //   const { password, student: studentData } = req.body;

  //zod validation

  // const zodparsedData = studentValidationSchema.parse(studentData);

  const AcadimicData = req.body;

  console.log(AcadimicData);

  const result =
    await AcadimicSemesterService.createAcadimicSemesterInToBd(AcadimicData);

  res.status(200).json({
    success: true,
    message: 'Acadimic senester is created succesfully',
    data: result,
  });
});

const getAcadiminSemester = catchAsync(async (req, res, next) => {
  const result = await AcadimicSemesterService.getAllAcadimicSemester();
  res.status(200).json({
    success: true,
    message: 'Acadimic Semester are retrieved succesfully',
    data: result,
  });
});

const getSingleAcadiminSemester = catchAsync(async (req, res, next) => {
  const { semesterID } = req.params;
  const result =
    await AcadimicSemesterService.singleAcadimicSemester(semesterID);
  res.status(200).json({
    success: true,
    message: 'single Acadimic Semester are  succesfully find',
    data: result,
  });
});

const updateSingleAcadiminSemester = catchAsync(async (req, res, next) => {
  const { semesterID } = req.params;
  const updateSemester = req.body;
  const result = await AcadimicSemesterService.updateAcadimicSemester(
    semesterID,
    updateSemester,
  );
  res.status(200).json({
    success: true,
    message: ' Acadimic Semester are updated  succesfully',
    data: result,
  });
});

export const acadimicSemesterController = {
  createAcadimicSemester,
  getAcadiminSemester,
  getSingleAcadiminSemester,
  updateSingleAcadiminSemester,
};
