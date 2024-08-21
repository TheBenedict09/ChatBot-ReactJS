import React, { useState } from "react";
import SendButton from "../images/SendButton.png";

export default function DialogueBox({ onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="Dialoguebox">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write something to search"
        onKeyPress={handleKeyPress}
      />
      <img
        src={SendButton}
        alt="Send"
        onClick={handleSendMessage}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
