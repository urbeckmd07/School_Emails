import React, { useEffect, useState } from "react";
import SchoolEmailBlock from "./SchoolEmailBlock";
import SchoolName from "./SchoolName";
import "./SchoolRow.css";

function SchoolRow({ schoolName, contacts, schoolId, dbId, district }) {
  var countEmailed = 0;
  var countRespond = 0;

  contacts.forEach((contact) => {
    if (contact.emailed) {
      countEmailed = countEmailed + 1
    }
    if (contact.responded) {
      countRespond = countRespond + 1
    }
  })

  return (
    <div className="schoolRow__container">
      <SchoolName
        schoolName={schoolName}
        district={district}
        dbId={dbId}
        schoolId={schoolId}
        contacts={contacts}
      />
      {contacts.map((contact, index) => (
        <SchoolEmailBlock key={index} id={index} emailed={contact.emailed} totalEmailed={countEmailed} totalResponses={countRespond} />
      ))}
    </div>
  );
}

export default SchoolRow;
