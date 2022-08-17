import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const [isHoverHello, setIsHoverHello] = useState(false);
  const [isHoverIm, setIsHoverIm] = useState(false);
  const [isHoverLu, setIsHoverLu] = useState(false);

  return (
    <div className="Landing grid-container">
      <div className="Landing-links">
        <NavLink
          className="Landing-link1"
          to="/info"
          onMouseOver={() => setIsHoverHello(true)}
          onMouseLeave={() => setIsHoverHello(false)}
        >
          {isHoverHello ? "Info" : "Hello."}
        </NavLink>

        <NavLink
          className="Landing-link2"
          to="/work"
          onMouseOver={() => setIsHoverIm(true)}
          onMouseLeave={() => setIsHoverIm(false)}
        >
          {isHoverIm ? "Work" : "I'm"}
        </NavLink>
        <NavLink
          className="Landing-link3"
          to="/contact"
          onMouseOver={() => setIsHoverLu(true)}
          onMouseLeave={() => setIsHoverLu(false)}
        >
          {isHoverLu ? "Contact" : "Lu."}
        </NavLink>
      </div>
      <div className="Landing-image">
        <img
          src="https://drive.google.com/uc?export=download&id=1oQFLQlyScpIsQzTqHfyKCziA3nMESBTt"
          alt="Lu Ndovi Portrait"
        />
      </div>
    </div>
  );
};

export default Landing;
