// NavBar.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Logo from "../images/CTLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from "react-router-dom"; 
import { logout } from '../store';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <div className="ProfileIcon" onClick={() => setShowMenu(!showMenu)}>
        <FontAwesomeIcon icon={faUser} className="Icon" />
        {showMenu && (
          <div className="DropdownMenu">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}
