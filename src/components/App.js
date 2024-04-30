import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// Importing user data
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      {/* Passing down data from user object to Home component */}
      <Home name={user.name} username={user.username} />

      {/* Passing down data to About component */}
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;

