import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      {/* GitHub link */}
      <a href={github}>{github}</a>
      <br />
      {/* LinkedIn link */}
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;

