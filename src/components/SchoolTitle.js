import React from "react";
import "./SchoolTitle.css";

function SchoolTitle({ name, district }) {
  return (
    <div className="schoolTitle__container">
      <h1>{name}</h1>
      <p>{district}</p>
    </div>
  );
}

export default SchoolTitle;
