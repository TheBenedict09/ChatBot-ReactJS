import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPage from "../src/pages/ChatPage";
import HomePage from "../src/pages/LoginPage";
import PrivateRoute from "../src/pages/PrivateRoute"; // Import the PrivateRoute component
import "../src/CSS/App.css"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
