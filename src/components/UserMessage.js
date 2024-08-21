import React from "react";
import { useSelector } from 'react-redux';
import YellowImage from "../images/YellowCircle.png";

export default function UserMessage({ message }) {
  const userName = useSelector((state) => state.auth.userName);
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <div className="UserMessage">
      <img src={YellowImage} alt="User" />
      <p className="NameInitials">{userInitial}</p>
      <p>{message}</p>
    </div>
  );
}
