import "./styles.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getNextGameboard, isFieldValueAlive } from "./gameboard";

// function renderGameboard(gameboard) {
//   return `<div class="gameboard">${gameboard
//     .map(
//       (row) =>
//         `<div class="gameboard-row">${row
//           .map(
//             (field) =>
//               `<div class=""><div class="gameboard-cell gameboard-cell--${
//                 isFieldValueAlive(field) ? "alive" : "dead"
//               }"></div></div>`
//           )
//           .join("")}</div>`
//     )
//     .join("")}</div>`;
// }

function Gameboard({ gameboard }) {
  return (
    <div className="gameboard">
      {gameboard.map((gameboardRow, rowIndex) => {
        return (
          <div className="gameboard-row" key={`${rowIndex}`}>
            {gameboardRow.map((gameboardField, columnIndex) => (
              <div
                className="gameboard-field"
                key={`${rowIndex}-${columnIndex}`}
              >
                <Cell field={gameboardField}></Cell>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function Cell({ field }) {
  return (
    <div
      className={`gameboard-cell gameboard-cell--${
        isFieldValueAlive(field) ? "alive" : "dead"
      }`}
    ></div>
  );
}

const initialGameboard = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

function App() {
  const [gameboard, setGameboard] = useState(initialGameboard);
  const [test, setTest] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGameboard((prevGameboard) => getNextGameboard(prevGameboard));
      console.log("DEBUG This will run every second!");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Gameboard gameboard={gameboard}></Gameboard>
    </div>
  );
}

ReactDOM.render(<App></App>, document.querySelector("#app"));
