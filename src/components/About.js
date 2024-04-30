import React from "react";

function About({ bio }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditional rendering of bio */}
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;

