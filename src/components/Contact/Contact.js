import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";
import { SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

const Contact = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="Contact">
      <div className="Contact-navbar">
        <NavLink
          className="Contact-NavLink"
          to="/"
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isHover ? "lu.ndovi" : "lu."}
        </NavLink>
      </div>
      <div className="Contact-firstPage">
        <p>Why not create something magical?</p>
      </div>
      <div className="Contact-secondPage">
        <p className="Contact-subtitle">Contact</p>
        <p>
          Whether you are a company, an agency or an individual, I want to
          collaborate <span style={{ fontStyle: "italic" }}>with</span> you and
          not just work <span style={{ fontStyle: "italic" }}>for</span> you.
          Bringing my energy, personality and skill-set to the table I see no
          reason as to why we cannot provide digital solutions to real world
          problems.
        </p>
        <p>
          If this sounds like the perfect match for you feel free to reach out
          to me on any of the platforms below:
        </p>
        <ul>
          <li>
            <SiGmail className="Contact-icon" />
            l.ndovi92@gmail.com
          </li>
          <li>
            <SiInstagram className="Contact-icon" /> @lusungundovi
          </li>
          <li>
            <SiLinkedin className="Contact-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
