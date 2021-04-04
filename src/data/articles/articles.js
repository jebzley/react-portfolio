const minesweeperArticle = {
    "title": "Minesweeper",
    "tagline": "A recreation of the single-player puzzle game commonly bundled with operating systems.",
    "link": "https://jebzley.github.io/minesweeper/",
    "paragraphs": "<p>A recreation of Minesweeper, the single-player puzzle game commonly bundled with operating systems.</p><h2>General Info</h2><p>I made this during week 4 of my software development course at _nology. </p><p>I absolutely love Minesweeper and when tasked with making a Javascript game in a week I jumped at the chance. It seemed like a great balance between something I could make in a week and something that would challenge me - I had never used recursion before, and it was a good chance to make use of classes, which I had never needed on my earlier, smaller projects.</p><p>Design-wise I tried to keep it as similar to the Win95 version as possible. The smiley face was a must. I even tracked down Fixedsys, a typeface used on DOS Windows systems, though I didn&#39;t end up using it as a bitmap font stuck out a bit amongst the clean lines of the rest.</p>
    <h3 id="technologies-used">Technologies used</h3>
    <ul>
    <li>Javascript ES6</li>
    <li>HTML 5</li>
    <li>CSS 3/SCSS</li>
    <li>jest</li>
    </ul>
    <h3 id="rules">Rules</h3>
    <p>Minesweeper is simple but challenging. You are given a grid of 100 tiles, with 15 containing bombs. </p>
    <ul>
    <li>Left click to reveal a tile.</li>
    <li>The number on each tile corresponds to how many bombs are on the 8 adjacent tiles.</li>
    <li>If a tile has no adjacent bombs, the game will recursively search until it finds surrounding tiles with adjacent bombs.</li>
    <li>If you suspect a tile has a bomb on it, right click to place a flag on it.</li>
    <li>If you manage to reveal every tile that doesn&#39;t contian a bomb, you have won the game!</li>
    </ul>
    <h2 id="how-it-works">How it works</h2>
    <h3 id="under-the-hood">Under the hood</h3>
    <p>Each tile on the board is represented by a <code>Cell</code> object which stores information about its current state. </p>
    <pre><code class="lang-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Cell</span> </span>{
      <span class="hljs-keyword">constructor</span>(column, row) {
        <span class="hljs-keyword">this</span>.column = column;
        <span class="hljs-keyword">this</span>.row = row;
        <span class="hljs-keyword">this</span>.id = `cell${<span class="hljs-keyword">this</span>.row}${<span class="hljs-keyword">this</span>.column}`;
        <span class="hljs-keyword">this</span>.isBomb = <span class="hljs-literal">false</span>;
        <span class="hljs-keyword">this</span>.hasFlag = <span class="hljs-literal">false</span>;
        <span class="hljs-keyword">this</span>.adjacentBombCount = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">this</span>.isRevealed = <span class="hljs-literal">false</span>;
      }
    }
    </code></pre>
    <p>All 100 objects are instantiated and stored in <code>const gameArr</code>, with unique identifiers for their corresponding column and row. </p>
    <p>These are formatted as <code>cell01</code>, <code>cell02</code> etc so they can be matched up with the HTML <code>id</code> of their corresponding <code>&lt;div&gt;</code> on the frontend, which can&#39;t start with a number.</p>
    <pre><code class="lang-javascript">// minesweeper.js
    export const createGameArray = () =&gt; {
      <span class="hljs-built_in">let</span> tempArr = [];
      <span class="hljs-keyword">for</span> (<span class="hljs-built_in">let</span> <span class="hljs-built_in">row</span> = <span class="hljs-number">0</span>; <span class="hljs-built_in">row</span> &lt; <span class="hljs-number">10</span>; <span class="hljs-built_in">row</span>++) {
        tempArr[<span class="hljs-built_in">row</span>] = [];
        <span class="hljs-keyword">for</span> (<span class="hljs-built_in">let</span> <span class="hljs-built_in">col</span> = <span class="hljs-number">0</span>; <span class="hljs-built_in">col</span> &lt; <span class="hljs-number">10</span>; <span class="hljs-built_in">col</span>++) {
          tempArr[<span class="hljs-built_in">row</span>][<span class="hljs-built_in">col</span>] = <span class="hljs-built_in">new</span> Cell(<span class="hljs-built_in">col</span>, <span class="hljs-built_in">row</span>);
        }
      }
      <span class="hljs-built_in">return</span> [].<span class="hljs-built_in">concat</span>.<span class="hljs-built_in">apply</span>([], tempArr);
    };
    
      // scripts.js
      const gameArr = createGameArray();
    </code></pre>
    <p>We now need 15 bombs randomly placed on cells. Initially I had a simple function placing 15 bombs on a cells with a random index anywhere between 0 and 99.</p>
    <p>The problem with this method is that it would sometimes generate the same number twice - so sometimes you&#39;d have 15 bombs, sometimes you&#39;d have less. The game worked fine but I felt it was not only unfair to the player, but felt a bit cheap on my part to leave what is essentially a bug in.</p>
    <p>I created this helper function to return an array that is a super cool club where only unique numbers are allowed in. The numbers in this array are the indexes where <code>isBomb</code> will be <code>true</code>.</p>
    <pre><code class="lang-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> generateRandomNumbers = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
      <span class="hljs-keyword">let</span> randomNumArray = [];
      <span class="hljs-keyword">while</span> (randomNumArray.length &lt; <span class="hljs-number">15</span>) {
        <span class="hljs-keyword">let</span> randomNumber = <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">99</span>);
        <span class="hljs-keyword">if</span> (randomNumArray.indexOf(randomNumber) === <span class="hljs-number">-1</span>)
          randomNumArray.push(randomNumber);
      }
      <span class="hljs-keyword">return</span> randomNumArray;
    };
    </code></pre>
    <p>Now the bombs are placed, the adjacent cells need numbers that represent how many bombs neighbour it. </p>
    <p>To do this I use a function that will be reused a couple more times in the codebase.
    It gets the objects that are off by one <code>Cell.column</code> or <code>Cell.row</code> and stores them in a row. 
    I don&#39;t like how repetitive this function is and I plan to refactor it once I&#39;ve ticked off the rest of the roadmap for this game.</p>
    <pre><code class="lang-javascript"><span class="hljs-keyword">const</span> findAdjacentCells = <span class="hljs-function">(<span class="hljs-params">cell, arr</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> adjacentCellArr = [];
    
      adjacentCellArr[<span class="hljs-number">0</span>] = arr.find(
        <span class="hljs-function">(<span class="hljs-params">object</span>) =&gt;</span> object.id == <span class="hljs-string">`cell<span class="hljs-subst">${cell.row}</span><span class="hljs-subst">${cell.column - <span class="hljs-number">1</span>}</span>`</span>
      );
      adjacentCellArr[<span class="hljs-number">1</span>] = arr.find(
        <span class="hljs-function">(<span class="hljs-params">object</span>) =&gt;</span> object.id == <span class="hljs-string">`cell<span class="hljs-subst">${cell.row}</span><span class="hljs-subst">${cell.column + <span class="hljs-number">1</span>}</span>`</span>
      );
      adjacentCellArr[<span class="hljs-number">2</span>] = arr.find(
        <span class="hljs-function">(<span class="hljs-params">object</span>) =&gt;</span> object.id == <span class="hljs-string">`cell<span class="hljs-subst">${cell.row - <span class="hljs-number">1</span>}</span><span class="hljs-subst">${cell.column}</span>`</span>
      );
      <span class="hljs-comment">// ... et cetera</span>
      <span class="hljs-keyword">return</span> adjacentCellArr;
    };
    </code></pre>
    <p>It is used in <code>calculateAdjacentBombCount()</code> to increment each <code>Cell.adjacentBombCount</code> accordingly. </p>
    <p>It is also used in <code>findOccupiedCells()</code>, which is what runs when a user clicks an empty square - it checks whether the adjacent cells have an <code>adjacentBombCount</code> above 0, and if not, recursively calls itself to then check the cells around them.</p>
    <pre><code class="lang-javascript">export const findOccupiedCells = <span class="hljs-function"><span class="hljs-params">(currentCell, gameArr)</span> =&gt;</span> {
      const adjacentCells = findAdjacentCells(currentCell, gameArr).filter(
        <span class="hljs-function"><span class="hljs-params">(cell)</span> =&gt;</span>
          cell != <span class="hljs-literal">undefined</span> &amp;&amp; !cell.isRevealed &amp;&amp; !cell.isBomb &amp;&amp; !cell.hasFlag
      );
      adjacentCells.forEach(<span class="hljs-function"><span class="hljs-params">(adjacentCell)</span> =&gt;</span> {
        <span class="hljs-keyword">if</span> (adjacentCell.adjacentBombCount &gt; <span class="hljs-number">0</span> &amp;&amp; !adjacentCell.isRevealed) {
          adjacentCell.isRevealed = <span class="hljs-literal">true</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (
          adjacentCell.adjacentBombCount == <span class="hljs-number">0</span> &amp;&amp;
          !adjacentCell.isRevealed
        ) {
          adjacentCell.isRevealed = <span class="hljs-literal">true</span>;
          findOccupiedCells(adjacentCell, gameArr);
        }
      });
    };
    </code></pre>
    <h3 id="setting-up-the-html">Setting up the HTML</h3>
    <p>With the game state now set up, it&#39;s time to render it and process the display and interactions on the frontend.</p>
    <p>To start off, I need 100 <code>&lt;div&gt;</code> containers with an <code>id</code> that we can access from Javascript. I&#39;m not going to do that by hand so I made a simple function to do it for me.</p>
    <pre><code class="lang-javascript"><span class="hljs-regexp">//</span> minesweeper.js
    export const renderBoard = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
      let divContent = <span class="hljs-string">""</span>;
      <span class="hljs-keyword">for</span> (let i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">100</span>; i++) {
        divContent += `<span class="javascript">&lt;div id=<span class="hljs-string">'cell${padNumber(i)}'</span> <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">'cell'</span>&gt;<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></span>`
      }
      <span class="hljs-keyword">return</span> divContent;
    };
    
    <span class="hljs-regexp">//</span>scripts.js
    <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"game-grid"</span>).innerHTML = renderBoard();
    </code></pre>
    <p>Now everything is initialised, I have to handle what happens when the user clicks on each cell.</p>
    <p>I loop through each cell from the HTML DOM...</p>
    <pre><code class="lang-javascript"><span class="hljs-built_in">document</span>.querySelectorAll(<span class="hljs-string">".cell"</span>).forEach(<span class="hljs-function"><span class="hljs-params">(cell)</span> =&gt;</span> {
    </code></pre>
    <p>...and immediately associate it with its corresponding <code>Cell</code> object.</p>
    <pre><code class="lang-javascript">const currentCell = gameArr.find(<span class="hljs-function"><span class="hljs-params">(object)</span> =&gt;</span> object.id == cell.id);
    </code></pre>
    <p>Now the objects and DOM elements are linked it&#39;s a simple case of adding click events to them and controlling what happens. Here&#39;s the logic:</p>
    <h3 id="on-left-click">On left click</h3>
    <ul>
    <li>If the user clicks an unrevealed tile bomb, trigger a <code>gameOver()</code> function that reveals all the tiles and stops them from being clickable.</li>
    <li>If the user clicks an unrevealed tile with an <code>adjacentBombCount</code> value and no flag, reveal the tile.</li>
    <li>If the user clicks an unrevealed tile with no value, run the <code>findOccupiedCells</code> function to scan the board until it finds cells with values.</li>
    </ul>
    <h3 id="on-right-click">On right click</h3>
    <ul>
    <li>If the user right clicks a tile with a flag and there are the same amount of flags and bombs, remove its flag.</li>
    <li>If the user right clicks an unrevealed tile and there are less flags than bombs, toggle whether it has a flag.</li>
    </ul>
    <h2 id="roadmap-todo">Roadmap / Todo</h2>
    <p>This project isn&#39;t quite complete - I had a week to do it but in my spare time I will be adding:</p>
    <ul>
    <li>A start menu</li>
    <li>A high score system</li>
    <li>Multiple difficulties</li>
    <li>Draggable windows</li>
    <li>More nostalgic styling!</li>
    </ul>
    "
}