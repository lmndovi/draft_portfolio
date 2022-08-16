import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="Landing grid-container">
      <div className="Landing-links">
        <NavLink className="Landing-link1" to="/info">
          Hello.
        </NavLink>
        <NavLink className="Landing-link2" to="/work">
          I'm
        </NavLink>
        <NavLink className="Landing-link3" to="/contact">
          Lu.
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
