import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Work.css";

const Work = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="Work">
      <div className="Work-navbar">
        <NavLink
          className="Work-NavLink"
          to="/"
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isHover ? "lu.ndovi" : "lu."}
        </NavLink>
      </div>
      <div className="Work-app1">
        <h1 className="Work-h1">App</h1>
        <p className="Work-p">Description</p>
      </div>
      <div className="Work-app2">
        <h1 className="Work-h1">App</h1>
        <p className="Work-p">Description</p>
      </div>
    </div>
  );
};

export default Work;
