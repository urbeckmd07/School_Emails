import React from 'react'
import "./Header.css";
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="headerContainer">
        <div className="header__left">
            <SchoolIcon className="header__icon" />
            <h1 className="header__title">School Contacts</h1>
        </div>

        <div className="header__right">
            <h2 className="header__scroll" onClick={() => {window.scrollTo(0, 0)}}>Top</h2>
            <h2 className="header__scroll" onClick={() => {window.scrollTo(0, document.body.scrollHeight)}}>Bottom</h2>
            <h2 className="header__home" onClick={() => navigate("/")}>Home</h2>
        </div>
    </div>
  )
}

export default Header