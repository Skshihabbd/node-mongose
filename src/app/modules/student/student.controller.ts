import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    //will call service function to send thid data
    const result = await StudentServices.createStudentIntoDB(studentData);
    //send response
    res.status(200).json({
      success: true,
      message: 'student created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllStudentById = async (req: Request, res: Response) => {
  try {
    const { studentid } = req.params;
    console.log(studentid);
    const result = await StudentServices.getSingleStudentFromDB(studentid);
    res.status(200).json({
      success: true,
      message: 'data get successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const StudentController = {
  createStudent,
  getAllStudent,
  getAllStudentById,
};
