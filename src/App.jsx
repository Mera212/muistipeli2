import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import pic1 from "../src/pic1.jpeg";
import pic2 from "../src/pic2.png";
import pic3 from "../src/pic3.png";
import pic4 from "../src/pic4.png";
import pic5 from "../src/pic5.png";
import pic6 from "../src/pic6.png";

function App() {
  const [cards, setCards] = useState(null);
  const [score, setScore] = useState(0);
  const [moves, SetMoves] = useState(0);
  const [disabled, setDisable] = useState(false);
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);
  const pics = [
    {
      pic: pic1,
      id: "1",
      matchFound: false,
      flipped: false,
    },
    {
      pic: pic2,
      id: "2",
      matchFound: false,
      flipped: false,
    },
    {
      pic: pic3,
      id: "3",
      matchFound: false,
      flipped: false,
    },
    {
      pic: pic4,
      id: "4",
      matchFound: false,
      flipped: false,
    },
    {
      pic: pic5,
      id: "5",
      matchFound: false,
      flipped: false,
    },
    {
      pic: pic6,
      id: "6",
      matchFound: false,
      flipped: false,
    },
  ];

  function resetCards() {
    const shuffled = [...pics, ...pics]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, key: Math.random() }));
    setCards(shuffled);
  }
  function handleCardClick(e) {
    firstSelection
      ? setSecondSelection(e.target.dataset.id)
      : setFirstSelection(e.target.dataset.id);
  }
  function resetTurn() {
    setFirstSelection(null);
    setSecondSelection(null);
    SetMoves((m) => m + 1);
    setDisable(false);
  }
  function handleNewGameClick() {
    resetTurn();
    SetMoves(0);
    setScore(0);
    resetCards();
  }

  useEffect(() => {
    if (!secondSelection) {
      return;
    }
    setDisable(true);
    if (firstSelection === secondSelection) {
      setCards((prev) => {
        return prev.map((card) => {
          if (card.id === firstSelection) {
            return { ...card, matchFound: true };
          } else {
            return card;
          }
        });
      });
      setScore((prev) => prev + 1);
      resetTurn();
    } else {
      setTimeout(() => resetTurn(), 1000);
    }
  }, [firstSelection, secondSelection]);

  useEffect(() => {
    resetCards();
  }, []);

  return (
    <div className="App">
      <button onClick={() => handleNewGameClick()}>New Game</button>
      <div className="gameboard">
        {cards &&
          Object.values(cards).map((card) => (
            <Card
              key={card.key}
              card={card}
              disabled={disabled}
              handleCardClick={handleCardClick}
            />
          ))}
      </div>

      <p>Total Moves: {moves}</p>
      <p>Total Score: {score}</p>
    </div>
  );
}

export default App;
