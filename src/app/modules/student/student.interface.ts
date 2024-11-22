//import { Schema, model, connect } from 'mongoose';

//interface--->>schema--->>model--->>>dbquery.
//client-->>route-->>controller-->>service-->>model-->>
//Response message--->>{success,message,data}
// 1. Create an interface representing a document in MongoDB.
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type UserName = {
  firstName: string;
  midlleName: string;
  lastName: string;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateofBirth: string;
  contactNo: string;
  emergencyContactNo: string;

  email: string;
  presentAddress: string;
  permanentAdress: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'block';
};
