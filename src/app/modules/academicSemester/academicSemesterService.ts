import { IacademicSemester } from './academicSemesterInterface';
import { AcademicSemester } from './academicSemesterModel';

const createSemester = async (
  payload: IacademicSemester
): Promise<IacademicSemester> => {
  const result = await AcademicSemester.create(payload);
  return result;
};
export const AcademicSemesterService = {
  createSemester,
};
