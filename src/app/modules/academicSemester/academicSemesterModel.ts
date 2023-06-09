import { Schema, model } from 'mongoose';
import {
  AcademicSemesterModel,
  IacademicSemester,
} from './academicSemesterInterface';
import {
  academicSemesterCodes,
  academicSemesterTitles,
  acdemicSemesterMonths,
} from './academicSemesterConstant';

const academicSemesterSchema = new Schema<IacademicSemester>(
  {
    title: { type: String, required: true, enum: academicSemesterTitles },
    year: { type: String, required: true },
    code: { type: String, required: true, enum: academicSemesterCodes },
    startMonth: { type: String, required: true, enum: acdemicSemesterMonths },
    endMonth: { type: String, required: true, enum: acdemicSemesterMonths },
  },
  {
    timestamps: true,
  }
);

export const AcademicSemester = model<IacademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);
