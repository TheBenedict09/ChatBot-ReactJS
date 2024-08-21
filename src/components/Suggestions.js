import React from "react";
import LightBulb from "../images/LightBulb.jpg";

export default function Suggestions() {
  return (
    <div className="Suggestions">
      <div className="SuggestionBox SuggestionBox1">
        <img src={LightBulb} alt="Suggestion 1" />
        <p>Tell me About Energy System</p>
      </div>
      <div className="SuggestionBox SuggestionBox2">
        <img src={LightBulb} alt="Suggestion 2" />
        <p>Our Global Operations</p>
      </div>
      <div className="SuggestionBox SuggestionBox3">
        <img src={LightBulb} alt="Suggestion 3" />
        <p>Suggest me best Enpower</p>
      </div>
    </div>
  );
}
