import React, { useEffect } from "react";
import "./SchoolContacts.css";
import SchoolTitle from "./SchoolTitle";
import ContactCard from "./ContactCard";
import { Fab } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenSchool, selectSchool } from "../features/schoolSlice";
import { useNavigate } from "react-router-dom";

function SchoolContacts() {
  const selectedSchool = useSelector(selectOpenSchool);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNewSchool = (event, direction) => {
    async function fetchData() {
      var id = selectedSchool.schoolId;
      if (direction === "next") {
        id = (id + 1).toString();
      } else if (direction === "previous") {
        id = (id - 1).toString();
      }
      const response = await fetch(`http://localhost:5000/schools/${id}`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const school = await response.json();
      if (!school) {
        return;
      }

      const schoolName = school.schoolName;
      const schoolId = school.schoolId;
      const contacts = school.contacts;
      const dbId = school.dbId;
      const district = school.district;
      dispatch(
        selectSchool({
          schoolName,
          schoolId,
          contacts,
          dbId,
          district
        })
      );
      navigate("/school");
    }
    fetchData();
  };


  return (
    <div className="schoolContacts__container">
      <div className="schoolContacts__schoolName">
        <SchoolTitle name={selectedSchool.schoolName} district={selectedSchool.district} />
      </div>

      <div className="schoolContacts__contactGroup">
        {selectedSchool.contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>

      <div className="schoolContacts__arrows">
        <div className="schoolContacts__arrowsPrevious">
          <Fab onClick={event => handleNewSchool(event, "previous")}>
            <ArrowBackIosNewIcon />
          </Fab>
        </div>
        <div className="schoolContacts__arrowsNext">
          <Fab onClick={event => handleNewSchool(event, "next")}>
            <ArrowForwardIosIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
}

export default SchoolContacts;
