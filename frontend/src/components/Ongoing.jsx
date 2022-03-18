import React, { useState } from "react";
import "./Ongoing.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Ongoing = () => {
  const [edit, setEdit] = useState(false);
  const [cancel, setCancel] = useState(false);
  const editHandler = () => {
    setCancel(true);
    setEdit(true);
  };
  const cancelHandler = () => {
    setCancel(false);
    setEdit(false);
  };

  return (
    <div className="Ongoing">
      <div className="left">
        <div className="check-list">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </div>
        {!edit ? (
          <p>ToDo Listttttttttttttttttttttttttttttttttttt</p>
        ) : (
          <input type="text" />
        )}
      </div>
      <div className="right">
        {!cancel ? (
          <div className="fungsi">
            <AiFillDelete className="icons delete" />
            <AiFillEdit className="icons edit" onClick={editHandler} />
          </div>
        ) : (
          <div className="option">
            <p onClick={cancelHandler}>cancel</p>
            <p>save</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ongoing;
