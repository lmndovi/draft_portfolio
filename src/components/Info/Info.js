import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Info.css";

const Info = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="Info">
      <div className="Info-navbar">
        <NavLink
          className="Info-NavLink"
          to="/"
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isHover ? "lu.ndovi" : "lu."}
        </NavLink>
      </div>
      <div className="Info-firstPage">
        <p>I turn dreams into digital products</p>
      </div>
      <div className="Info-coverPhoto">
        <img
          className="Info-image"
          src="https://drive.google.com/uc?export=download&id=1sMAymaD2K1RTw3tKJlSvJM_fQlXuD04S"
          alt="Lu Ndovi Cover Photo"
        />
      </div>
      <div className="Info-secondPage">
        <p className="Info-subtitle">About</p>
        <p className="Info-heading">
          Hi, my name is Lu. I’m a multi-talented individual with an unrelenting
          thirst for learning.
        </p>
        <p>
          Having always admired renaissance people and their varied skill sets,
          I place a lot of value in being competent across a wide range of
          disciplines.
        </p>
        <p>
          Depending on the day you can call me a developer, a copywriter, a
          product designer or a consultant. My personality (INTJ) makes it
          easier for me to break down problems into smaller logical steps in
          order to find solutions. Being naturally positive, calm and empathetic
          helps immensely when it comes to collaboration and in my mind makes me
          the ultimate team player (see sporting background).
        </p>
      </div>
      <div className="Info-thirdPage">
        <p>
          Aside from work I’ve been described as a semi-professional athlete,
          social salsa dancer, everyday meditator, occasional yogi and lifetime
          learner/explorer. All of these things relate back to my working life
          as I am a firm believer in continual growth and constantly try to push
          myself out of my comfort (which can be extremely difficult as a
          natural introvert).
        </p>
        <p>
          A burning desire of mine is to create a long lasting, sustainable
          positive impact on the world but as well as my local community (north
          London) and back in Zambia where my family hail from. Particularly I’d
          love to focus on the youth and the vulnerable, who are all too often
          forgotten about.
        </p>
      </div>
      <div className="Info-fourthPage">
        <p>
          Currently I am working remotely with select clients but I am always
          open to new opportunities that may present themselves. Below I have
          attached my CV with more information on my education, experience,
          skills and more:
        </p>
        <p>CV LINK:</p>
        <p>
          Click Here
          (https://docs.google.com/document/d/1Vux-BkEdgev_z_5fb3OzWShJ8d_VvOLAzR9l-spU2fs/edit?usp=sharing)
        </p>
      </div>
    </div>
  );
};

export default Info;
