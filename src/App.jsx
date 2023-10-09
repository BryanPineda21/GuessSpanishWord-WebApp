import { useState } from 'react'
import './App.css'
import Flashcard from './Components/Flashcard';


function App() {
  const [flashcards, setFlashcards] = useState(CARD_DATA);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [highestScore, setHighestScore] = useState(0);
  const [score, setScore] = useState(0);



  const randomButton = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex);
  };

  const backButton = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
  };

  const nextButton = () => {
    const newIndex = currentIndex + 1;
    if (newIndex < flashcards.length) {
      setCurrentIndex(newIndex);
      setIsCorrect(null);
    }
  };

  const checkAnswer = () => {
    const correctAnswer = flashcards[currentIndex].answer.toLowerCase();
    const userGuess = userInput.toLowerCase();
  
    if (correctAnswer === userGuess) {
      setIsCorrect(true);
      setScore(score + 1);
      setHighestScore((prevHighestScore) => Math.max(prevHighestScore, currentIndex + 1));
    } else {
      setScore(0);
      setCurrentIndex(0);
      setIsCorrect(false);
      setUserInput("");
    }

    if(userGuess == ""){
      setIsCorrect("Please Input a guess!")
    }
  };


  return (
    <div className='App'>

<div className='Header'>
    <h1>The Ultimate Test Your Spanish!</h1>
    <h3>How good can you translate Spanish to English? Test your Knowledge Here</h3>
    <h4>Number of cards: 10</h4>
    <h4>Current score: {score}  Highest score : {highestScore}</h4>
  </div>
      

  <Flashcard flashcard={flashcards[currentIndex]}
    userInput={userInput}
    isCorrect={isCorrect}
    onInputChange={(e) => setUserInput(e.target.value)}
    onCheckButtonClick={checkAnswer}
    />
  <div className='buttons'>
  <button className= "backButton" onClick={backButton}>Back</button>
  <button className = "randomButton"onClick={randomButton}>Random</button>
  <button className = "nextButton"onClick={nextButton}>Next</button>
  </div> 

  </div>
  )
}
  const CARD_DATA = [
    {question:"How do you say apple in Spanish?",
    answer:"Manzana"
    },
    {question:"what is lentes in english?",
    answer:"Glasses"
    },
    {question:"How do you say hair in Spanish?",
    answer:"Pelo"
    },
    {question:"How do you say watermelon in Spanish?",
    answer:"Sandia"
    },
    {question:"What is trabajo in english?",
    answer:"Work"
    },
    {question:"How do you say eat in Spanish?",
    answer:"Comer"
    },
    {question:"How do you say drink in Spanish?",
    answer:"Tomar"
    },
    {question:"How do you say sleep in Spanish?",
    answer:"Dormir"
    },
    {question:"How do you say running in Spanish?",
    answer:"Correr"
    },
    {question:"How do you say haircut in Spanish?",
    answer:"Corte de pelo"
    }
]









export default App
