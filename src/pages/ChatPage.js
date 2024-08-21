import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import WelcomeCard from "../components/WelcomeCard";
import Suggestions from "../components/Suggestions";
import DialogueBox from "../components/DialogueBox";
import UserMessage from "../components/UserMessage";
import BotMessage from "../components/BotMessage";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (message) => {
    const userMessage = { from: "user", message };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botResponse = getBotResponse(message);
    const botMessage = { from: "bot", message: botResponse };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const getBotResponse = (userMessage) => {
    switch (userMessage.toLowerCase()) {
      case "hi":
        return "Hello, how may I help you today?";
      case "what is transformer":
        return "A transformer is a model architecture used in natural language processing (NLP) that relies on self-attention mechanisms to process input data and produce output. It has become the foundation for many state-of-the-art models in NLP.";
      case "who are you":
        return "I am an AI assistant created to help you with your queries.";
      case "what is ai":
        return "AI, or artificial intelligence, refers to the simulation of human intelligence in machines that are designed to think and learn like humans.";
      case "tell me a joke":
        return "Why don't scientists trust atoms? Because they make up everything!";
      case "goodbye":
        return "Goodbye! Have a great day!";
      default:
        return "Sorry, I didn't understand that.";
    }
  };

  return (
    <div className="ChatPage">
      <NavBar />
      {messages.length === 0 && <WelcomeCard />}
      <div className="ChatContainer" ref={chatContainerRef}>
        <div className="Messages">
          {messages.map((msg, index) =>
            msg.from === "bot" ? (
              <BotMessage key={index} message={msg.message} />
            ) : (
              <UserMessage key={index} message={msg.message} />
            )
          )}
        </div>
        <DialogueBox onSendMessage={handleSendMessage} />
      </div>
      {messages.length === 0 && <Suggestions />}
    </div>
  );
}
