import "./styles.css";
import { getNextGameboard } from "./gameboard";

function renderGameboard(gameboard) {
  return `<div class="playfield">${gameboard
    .map(
      row =>
        `<div class="playfield-row">${row
          .map(field => `<div class="playfield-field">${field}</div>`)
          .join("")}</div>`
    )
    .join("")}</div>`;
}

function render(gameboard) {
  document.getElementById("app").innerHTML = `
<h1>Hello Game Of Life!</h1>
<div>
  ${renderGameboard(gameboard)}
</div>
`;
}

function play() {
  let gameboard = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ];

  render(gameboard);
  setTimeout(() => {
    gameboard = getNextGameboard(gameboard);
    render(gameboard);
  }, 1000);
}

play();
