import React from "react";
import HappinessPicker from "./HappinessPicker";
import { useState } from "react";

const items = ["Food", "Service", "Value for money"];

function FeedbackForm() {
  const [ratings, setRatings] = useState([]);

  const handleRatingChange = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const totalScore = ratings.reduce((a, b) => a + b, 0);

  return (
    <div className="feedbackForm">
      {items.map((item, index) => (
        <div key={index} className="feedbackItem">
          <label>
            <h3>{item}</h3>
            <HappinessPicker
              value={ratings[index]}
              onChange={(value) => handleRatingChange(index, value)}
            />
          </label>
        </div>
      ))}
      <div className="totalScore">
        <h1>Total Score: {totalScore}/12</h1>
      </div>
    </div>
  );
}

export default FeedbackForm;
