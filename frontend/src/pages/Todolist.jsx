import React from "react";
import "./Todolist.css";
import AddToDo from "../components/AddToDo";
import Ongoing from "../components/Ongoing";

const Todolist = () => {
  return (
    <div className="salam">
      <h1>Good Morning, Lidya</h1>

      <AddToDo />
      <h2>Ongoing</h2>
      <Ongoing />
    </div>
  );
};

export default Todolist;
