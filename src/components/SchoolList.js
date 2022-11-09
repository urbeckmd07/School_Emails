import React, { useEffect, useState } from "react";
import "./SchoolList.css";
import SchoolRow from "./SchoolRow";

function SchoolList() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    async function getSchools() {
      const response = await fetch("http://localhost:5000/schools");

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const schools = await response.json();
      setSchools(schools);
    }
    getSchools();
    return;
  }, [schools.length]);

  return (
    <div className="schoolList__container">
      {schools.map((school, index) => (
        <SchoolRow
          key={index}
          dbId={school._id}
          schoolName={school.schoolName}
          schoolId={school.schoolId}
          contacts={school.contacts}
          district={school.district}
        />
      ))}
    </div>
  );
}

export default SchoolList;
