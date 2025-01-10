import React from 'react';
import binImg from "../assets/images/bin.png";

const DeleteTask = ({ index, deleteTask }) => {
  return (
  <img src={binImg} alt="Delete" onClick={() => deleteTask(index)} /> 
  );
};

export default DeleteTask;