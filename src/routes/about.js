import React from "react";

import "../style/about.scss";

import { ReactComponent as Discord } from "../assets/icons/discord.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";

import artists from "../data/artists.json";

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
            {Object.keys(artists).map((item, index) => (
              <a href={artists[item].link} rel="noreferrer" target="_blank">
                <div id="artist" key={index}>
                  <div id="profile" style={
                    { backgroundImage: `url(/images/profiles/${artists[item].profile})` }
                  } />
                  <div id="name">{item}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div id="group" className="contact">
          <p id="title">Contact</p>
          <div id="list">
            <a href="https://isamin.kr" rel="noreferrer" target="_blank"><Discord /></a>
            <a href="https://isamin.kr" rel="noreferrer" target="_blank"><Mail /></a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
