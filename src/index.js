import "./styles.css";
import { getNextGameboard, isFieldValueAlive } from "./gameboard";

function renderGameboard(gameboard) {
  return `<div class="gameboard">${gameboard
    .map(
      (row) =>
        `<div class="gameboard-row">${row
          .map(
            (field) =>
              `<div class="gameboard-field"><div class="gameboard-cell gameboard-cell--${
                isFieldValueAlive(field) ? "alive" : "dead"
              }"></div></div>`
          )
          .join("")}</div>`
    )
    .join("")}</div>`;
}

function render(gameboard) {
  document.getElementById("app").innerHTML = `
  ${renderGameboard(gameboard)}
`;
}

function play() {
  let gameboard = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];

  render(gameboard);
  setInterval(() => {
    gameboard = getNextGameboard(gameboard);
    render(gameboard);
  }, 1000);
}

play();
