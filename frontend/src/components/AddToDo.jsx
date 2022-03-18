import React from "react";
import Input from "./Input";
import { AiFillPlusSquare } from "react-icons/ai";
import "./AddToDo.css";

const AddToDo = () => {
  return (
    <div className="todo">
      <Input />
      <AiFillPlusSquare className="icon" />
    </div>
  );
};

export default AddToDo;
