import React, { useState } from 'react'
import "./SchoolEmailBlock.css";

function SchoolEmailBlock({ id, totalEmailed, totalResponses }) {
  return (
    <div className="schoolEmailBlock" style={{backgroundColor: (id > totalEmailed) ? "white" : (id < totalEmailed & id >= totalResponses) ? "red" : (id < totalResponses) ? "green" : "white"}}></div>
  )
}

export default SchoolEmailBlock