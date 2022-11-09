import React, { useState } from "react";
import "./ContactCard.css";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from '@mui/icons-material/Check';
import { Fab } from "@mui/material";
import { useSelector } from "react-redux";
import { selectOpenSchool } from "../features/schoolSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ContactCard({ contact }) {
  const selectedSchool = useSelector(selectOpenSchool);
  const [emailed, setEmailed] = useState(false);
  const [responded, setResponded] = useState(false);
  const navigate = useNavigate();
  const [fabColor, setFabColor] = useState('white');
  const [icon, setIcon] = useState(<EmailIcon />)

  const handleEmailed = () => {
    async function updateData() {
      if (!contact.emailed && !emailed) {
        window.open(`mailto:${contact.emailAddress}`);

        await fetch(
          `http://localhost:5000/update/${selectedSchool.dbId}/${contact.id}`,
          {
            method: "POST",
            body: JSON.stringify({}),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        navigate("/school");
      }
    }
    updateData();
    setEmailed(true);
  };

  useEffect(() => {
    if ((contact.emailed & contact.responded) || responded) {
      setFabColor('#3CCF4E');
      setIcon(<CheckIcon />)
    } else if ((contact.emailed & !contact.responded) || emailed) {
      setFabColor('#E64949')
      setIcon(<CloseIcon />)
    } else {
      setFabColor('white')
      setIcon(<EmailIcon />)
    }
  }, [emailed, responded])

  const handleResponded = () => {
    async function updateData() {
      if (!contact.responded && !responded) {
  
        await fetch(
          `http://localhost:5000/updateResponded/${selectedSchool.dbId}/${contact.id}`,
          {
            method: "POST",
            body: JSON.stringify({}),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        navigate("/school");
      }
    }
    updateData();
    setResponded(true);
  };


  return (
    <div
      className="contactCard__container"
      style={{
        backgroundColor:
          (contact.emailed || emailed) && 'rgba(229, 229, 229, 0.4)',
      }}
    >
      <div className="schoolContacts__contactCardLeft">
        <h2>{contact.name}</h2>
        <p>{contact.title}</p>
      </div>

      <div className="schoolContacts__contactCardRight">
        <Fab
          onClick={(!emailed || !contact.emailed) ? handleEmailed : handleResponded}
          style={{
            background: fabColor,
            color: contact.emailed && "white",
          }}
        >
          {icon}
        </Fab>
      </div>
    </div>
  );
}

export default ContactCard;
