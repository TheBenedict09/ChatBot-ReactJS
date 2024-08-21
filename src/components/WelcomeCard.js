import React from "react";
import BlueStar from "../images/BlueStar.png";

export default function WelcomeCard() {
  const userName = localStorage.getItem('userName') || 'User'; // Default to 'User' if no name is found

  return (
    <div className="WelcomeCard">
      <img src={BlueStar} alt="Blue Star" />
      <h1 className="HelloName">Hello {userName}</h1>
      <h2>How can I help you today?</h2>
    </div>
  );
}
