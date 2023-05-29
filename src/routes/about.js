import React from "react";

import "../style/about.scss";

import { ReactComponent as Discord } from "../assets/icons/discord.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";

const About = () => {
  return (
    <div id="page" className="about">
      <div id="section" className="index">
        <div id="character" />
        <div id="text">
          <p id="slogun">“MAKE MUSIC. LIVE IN MUSIC.”</p>
          <p id="description">Rooftop is Korean Label. Many Artist released thier songs through Rooftop Official Label. From 2022, We are have running many Compilations & EPs.</p>
        </div>
      </div>
      <div id="section" className="content">
        <div id="group" className="artists">
          <p id="title">Main Artists</p>
          <div id="list">
            {[1, 2, 3].map((item, index) => (
                <div id="artist" key={index}>
                  <div id="profile" />
                  <div id="name">KiRist</div>
                </div>
              )
            )}
          </div>
        </div>
        <div id="group" className="contact">
          <p id="title">Contact</p>
          <div id="list">
            <a href="/" target="_blank"><Discord /></a>
            <a href="/" target="_blank"><Mail /></a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
