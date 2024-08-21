import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"; 
import { setToken, setUserName } from '../store';
import bgImage from "../images/bg.png";
import ManImage from "../images/HPI1.png";
import StarImage from "../images/HPI2.png";
import credentials from "../credentials.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const rand = () => Math.random().toString(36).substr(2);

  const generateToken = () => rand() + rand() + rand() + "-" + rand() + rand() + rand();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (email && password) {
      if (!validateEmail(email)) {
        setEmailError("Invalid email format");
        return;
      } else {
        setEmailError("");
      }

      const user = credentials.find(cred => cred.email === email && cred.password === password);
      
      if (user) {
        const token = generateToken(); 
        dispatch(setToken(token));

        const userName = email.split("@")[0]; 
        dispatch(setUserName(userName));

        navigate("/chat");
      } else {
        toast.error("Invalid email or password", {
          position: "top-center"
        });
      }
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="HomePage">
      <div className="Background">
        <img src={bgImage} alt="Background" />
        <div className="Content">
          <h1 className="Welcomeback">Hey Welcome Back!</h1>
          <p className="Happy">We are very Happy to See you back!</p>
          <p className={`InputTitle ${emailError ? "ErrorTitle" : ""}`}>Email</p>
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            className={emailError ? "ErrorInput" : ""}
          />
          {emailError && <p className="ErrorMessage">{emailError}</p>}
          <p className="InputTitle">Password</p>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="Button" onClick={handleLogin}>
            Login
          </button>
        </div>
        <img className="ManImage" src={ManImage} alt="Man" />
      </div>
      <img className="StarImage" src={StarImage} alt="Star" />
      <ToastContainer />
    </div>
  );
}
