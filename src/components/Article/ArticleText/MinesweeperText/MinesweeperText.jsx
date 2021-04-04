import React from "react";

const MinesweeperText = () => {
  return (
    <>
      <h3>Overview</h3>
      <p>
        I made this during week 4 of my software development course at _nology.
        I absolutely love Minesweeper and when tasked with making a Javascript
        game in a week I jumped at the chance.
        <br />
        It seemed like a great balance between something I could make in a week
        and something that would challenge me - I had never used recursion
        before, and it was a good chance to make use of classes, which I had
        never needed on my earlier, smaller projects.
        <br />
        Design-wise I tried to keep it as similar to the Win95 version as
        possible. The smiley face was a must. I even tracked down Fixedsys, a
        typeface used on DOS Windows systems, though I didn't end up using it as
        a bitmap font stuck out a bit amongst the clean lines of the rest.
      </p>
      <h4>Technologies Used</h4>
      <ul>
        <li>JavaScript ES6</li>
        <li>HTML5</li>
        <li>SASS</li>
        <li>Jest</li>
      </ul>
      <h4>Rules</h4>
      <ul>
        <li>Left click to reveal a tile</li>
        <li>
          The number on each tile corresponds to how many bombs are on the 8
          adjacent tiles.
        </li>
        <li>
          If a tile has no adjacent bombs, the game will recursively search
          until it finds surrounding tiles with adjacent bombs.
        </li>
        <li>
          If you suspect a tile has a bomb on it, right click to place a flag on
          it.
        </li>
        <li>
          If you manage to reveal every tile that doesn't contian a bomb, you
          have won the game!
        </li>
      </ul>
      <h3>How it Works</h3>
      <h4>Under the hood</h4>
      <p>
        Each tile on the board is represented by a <code>Cell</code> object
        which stores information about its current state
      </p>
      <pre>
        <code>
          {`class Cell {
  constructor(column, row) {
    this.column = column;
    this.row = row;
    this.id = \`cell\${this.row}\${this.column}\`;
    this.isBomb = false;
    this.hasFlag = false;
    this.adjacentBombCount = 0;
    this.isRevealed = false;
  }
}`}
        </code>
      </pre>
      <p>
        All 100 objects are instantiated and stored in `const gameArr`, with
        unique identifiers for their corresponding column and row. These are
        formatted as <code>cell01</code>, <code>cell02</code> etc so they can be
        matched up with the HTML ID of their corresponding{" "}
        <code>{`<div>`}</code>on the frontend, which can't start with a number.
      </p>
      <pre>
        <code>
          {`// minesweeper.js
export const createGameArray = () => {
  let tempArr = [];
  for (let row = 0; row < 10; row++) {
    tempArr[row] = [];
    for (let col = 0; col < 10; col++) {
      tempArr[row][col] = new Cell(col, row);
    }
  }
  return [].concat.apply([], tempArr);
};

  // scripts.js
  const gameArr = createGameArray();`}
        </code>
      </pre>
      <p>
        We now need 15 bombs randomly placed on cells. Initially I had a simple
        function placing 15 bombs on a cells with a random index anywhere
        between 0 and 99.
      </p>
      <p>
        The problem with this method is that it would sometimes generate the
        same number twice - so sometimes you'd have 15 bombs, sometimes you'd
        have less. The game worked fine but I felt it was not only unfair to the
        player, but felt a bit cheap on my part to leave what is essentially a
        bug in.
      </p>
      <p>
        I created this helper function to return an array that is a super cool
        club where only unique numbers are allowed in. The numbers in this array
        are the indexes where <code>isBomb</code> will be <code>true</code>.
      </p>
      <pre>
        <code>
          {`export const generateRandomNumbers = () => {
  let randomNumArray = [];
  while (randomNumArray.length < 15) {
    let randomNumber = Math.floor(Math.random() * 99);
    if (randomNumArray.indexOf(randomNumber) === -1)
      randomNumArray.push(randomNumber);
  }
  return randomNumArray;
};`}
        </code>
      </pre>
      <p>
        Now the bombs are placed, the adjacent cells need numbers that represent
        how many bombs neighbour it.
      </p>
      <p>
        To do this I use a function that will be reused a couple more times in
        the codebase.
        <br />
        It gets the objects that are off by one `Cell.column` or `Cell.row` and
        stores them in a row.
        <br />I don't like how repetitive this function is and I plan to
        refactor it once I've ticked off the rest of the roadmap for this game.
      </p>
      <pre>
        <code>
          {`const findAdjacentCells = (cell, arr) => {
  const adjacentCellArr = [];

  adjacentCellArr[0] = arr.find(
    (object) => object.id == \`cell\${cell.row}\${cell.column - 1}\`
  );
  adjacentCellArr[1] = arr.find(
    (object) => object.id == \`cell\${cell.row}\${cell.column + 1}\`
  );
  adjacentCellArr[2] = arr.find(
    (object) => object.id == \`cell\${cell.row - 1}\${cell.column}\`
  );
  // ... et cetera
  return adjacentCellArr;
};`}
        </code>
      </pre>
      <p>
        It is used in <code>calculateAdjacentBombCount()</code> to increment
        each <code>Cell.adjacentBombCount</code> accordingly.
      </p>
      <p>
        It is also used in <code>findOccupiedCells()</code>, which is what runs
        when a user clicks an empty square - it checks whether the adjacent
        cells have an <code>adjacentBombCount</code> above 0, and if not,
        recursively calls itself to then check the cells around them.
      </p>
      <pre>
        <code>
          {`export const findOccupiedCells = (currentCell, gameArr) => {
  const adjacentCells = findAdjacentCells(currentCell, gameArr).filter(
    (cell) =>
      cell != undefined && !cell.isRevealed && !cell.isBomb && !cell.hasFlag
  );
  adjacentCells.forEach((adjacentCell) => {
    if (adjacentCell.adjacentBombCount > 0 && !adjacentCell.isRevealed) {
      adjacentCell.isRevealed = true;
    } else if (
      adjacentCell.adjacentBombCount == 0 &&
      !adjacentCell.isRevealed
    ) {
      adjacentCell.isRevealed = true;
      findOccupiedCells(adjacentCell, gameArr);
    }
  });
};`}
        </code>
      </pre>
      <h4>Setting up the HTML</h4>
      <p>
        With the game state now set up, it's time to render it and process the
        display and interactions on the frontend.
      </p>
      <p>
        To start off, I need 100 <code>{`<div>`}</code> containers with a an ID
        that we can access from Javascript. I'm not going to do that by hand so
        I made a simple function to do it for me.
      </p>
      <pre>
        <code>
          {`// minesweeper.js
export const renderBoard = () => {
  let divContent = "";
  for (let i = 0; i < 100; i++) {
    divContent += \`<div id='cell\${padNumber(i)}' class='cell'></div>\`
  }
  return divContent;
};

//scripts.js
document.getElementById("game-grid").innerHTML = renderBoard();`}
        </code>
      </pre>
      <p>
        Now everything is initialised, I have to handle what happens when the
        user clicks on each cell.
      </p>
      <p>I loop through each cell from the DOM...</p>
      <pre>
        <code>
          {`document.querySelectorAll(".cell").forEach((cell) => {
`}
        </code>
      </pre>
      <p>
        ...and immediately associate it with its corresponding <code>Cell</code>{" "}
        object.
      </p>
      <pre>
        <code>
          {`const currentCell = gameArr.find((object) => object.id == cell.id);
`}
        </code>
      </pre>
      <p>
        Now the objects and DOM elements are linked it's a simple case of adding
        click events to them and controlling what happens. Here's the logic:
      </p>
      <h4>On left click</h4>
      <ul>
        <li>
          If the user clicks an unrevealed tile bomb, trigger a{" "}
          <code>gameOver()</code>
          function that reveals all the tiles and stops them from being
          clickable.
        </li>
        <li>
          If the user clicks an unrevealed tile with an{" "}
          <code>adjacentBombCount</code> value and no flag, reveal the tile.
        </li>
        <li>
          If the user clicks an unrevealed tile with no value, run the
          <code>findOccupiedCells</code> function to scan the board until it
          finds cells with values.
        </li>
      </ul>
      <h4>On right click</h4>
      <ul>
        <li>
          If the user right clicks a tile with a flag and there are the same
          amount of flags and bombs, remove its flag.
        </li>
        <li>
          If the user right clicks an unrevealed tile and there are less flags
          than bombs, toggle whether it has a flag.
        </li>
      </ul>
      <h3>Todo</h3>
      <p>
        This project isn't quite complete - I had a week to do it but in my
        spare time I will be adding:
      </p>
      <ul>
          <li>A start menu</li>
          <li>A high score system</li>
          <li>Multiple difficulties and grid sizes</li>
          <li>Draggable windows</li>
          <li>More nostalgic styling!</li>
      </ul>
    </>
  );
};

export default MinesweeperText;
