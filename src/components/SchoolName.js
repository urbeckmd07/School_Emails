import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSchool } from "../features/schoolSlice";
import "./SchoolName.css";

function SchoolName({ schoolName, schoolId, contacts, dbId, district }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      selectSchool({
        schoolName,
        schoolId,
        contacts,
        dbId,
        district,
      })
    );
    navigate("/school");
  };

  return (
    <div className="schoolName__container" onClick={handleClick}>
      <h1>{schoolName}</h1>
    </div>
  );
}

export default SchoolName;
