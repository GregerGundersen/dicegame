import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [p1Total, setP1Total] = useState(0);
  const [p2Total, setP2Total] = useState(0);

  const rollerFunction = () => {
    const dice1 = Math.floor(Math.random() * 6 + 1);
    const dice2 = Math.floor(Math.random() * 6 + 1);

    if (dice1 > 1) {
      setP1Total(p1Total + dice1);
    } else {
      setP1Total(p1Total - Math.floor(Math.random() * 9 + 1));
    }
    if (dice2 > 1) {
      setP2Total(p2Total + dice2);
    } else {
      setP2Total(p2Total - Math.floor(Math.random() * 9 + 1));
    }
  };

  return (
    <div className="App">
      <div className="score">
        <div className="player1_score">
          <p>
            <b>Player 1:</b> {p1Total} / 30
          </p>
        </div>
        <div className="player2_score">
          <p>
            <b>Player 2:</b> {p2Total} / 30{" "}
          </p>
        </div>
      </div>
      <div className="dices">
        <div className="player1">
          <i className="fas fa-dice-one"></i>
        </div>
        <div className="player2">
          <i className="fas fa-dice-one"></i>
        </div>
      </div>
      <div className="declareWinner">
        {p1Total >= 30
          ? "Player 1 is the winner"
          : p2Total >= 30
          ? "Player 2 is the winner"
          : ""}
      </div>
      <button onClick={rollerFunction} className="rolldice" type="button">
        Roll
      </button>
    </div>
  );
}

export default App;
