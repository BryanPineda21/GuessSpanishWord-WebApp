import React, { useState } from "react";

const Flashcard = ({flashcard, userInput, onInputChange, onCheckButtonClick, isCorrect }) => {
  const [flip, setFlip] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);


  const toggleFlip = () => {
    setFlip(!flip);
    setShowAnswer(true);
  };

 
  return (
    <div className="main-card">
    <div className={`card ${flip ? "flipped" : ""}`} onClick={toggleFlip}>
      <div className="card-text">
        <h2 className="text">
          {flip ? (
            <p className="back">
              {showAnswer ? `${flashcard.answer}` : ""}
            </p>
          ) : (
            <p className="front">{`${flashcard.question}`}</p>
          )}
        </h2>
      </div>
    </div>

    <div className="guesscard">
      <div className="guesscard-content">
      <div className="guess-check"> Your guess is: 
        {isCorrect === true && <p className="flashcard-correct">Correct!</p>}
        {isCorrect === false && <p className="flashcard-incorrect">Incorrect!</p>}
      </div>

        <input type="text"
        placeholder="Enter Your Guess"
        value={userInput} 
        onChange={onInputChange}/>

        <button className ="check-button" 
        onClick={onCheckButtonClick}>Check</button>
      </div>
    </div>
    </div>
  );
};

export default Flashcard;

