import React, { useEffect, useState } from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {

  const [pathname, setPathname] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    setPathname(location.pathname);
  }, [location])

  const schoolContactDir = (pathname === "/school");

  return (
    <div className="footer__container" style={{ bottom: (schoolContactDir) ? "0px" : "none" }}>
      <h5>&copy; Matt Urbeck</h5>
    </div>
  );
}

export default Footer;
