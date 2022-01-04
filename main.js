// Module Pattern IIFE
const game = (function(){
    let squares = document.querySelectorAll('.square'); // Array of each box on game-board
    let playButton = document.querySelector('.play'); // Play button
    let result = document.querySelector('.result'); // Result div
    let turn = 0; // turn counter
    let player1; // player 1
    let player2; // player2 
// Start Game when play button is clicked
    playButton.addEventListener('click', function (){
        player1 = getPlayer(1);
        player2 = getPlayer(2);
        draw();
    });   
// Function used to get player 1 and player 2
    function getPlayer(num){
        let marker;
        (num === 1) ? marker = 'X' : marker = 'O';
        let playerName = document.querySelector(`#player${num}`).value;
        return makePlayer(playerName, num, marker)
    }; 
// Function used to draw in individual boxes
    function draw(){
        let marker;
        squares.forEach(box => {
            box.addEventListener('click', () => {
                if(turn === 9){
                    return 'Error';
                };
                (turn === 0 || turn % 2 === 0) ? marker = 'X' : marker = 'O';
                if(box.textContent !== ''){
                    return;
                }
                box.textContent = marker;
                turn ++;
                let winOrNot = detectGameOver();
                isGameOver(winOrNot);
            });
        });
    };
// Win conditions array for the game
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
// Detect if winCondition has been met
    function detectGameOver(){ 
        let player1Counter = 0; // counter variable used to detect 3 in a row from player 1
        let player2Counter = 0; // counter variable used to detect 3 in a row from player 2
        let gameOver = false; // If a win or a draw is detected this variable will become true
        winConditions.forEach(row => {
            if(gameOver === true){
                return;
            }
            player1Counter = 0;
            player2Counter = 0;
            row.forEach(block => {
                if(squares[block].textContent === player1.marker){
                    player1Counter ++;
                }
                else if(squares[block].textContent === player2.marker){
                    player2Counter ++;
                }
            });
        if(player1Counter === 3 || player2Counter === 3 || turn === 9){
            gameOver = true;
        }
        });
        if(player1Counter === 3){
            return 'Player1';
        }
        else if(player2Counter === 3){
            return 'Player2';
        }
        else if(turn === 9){
            return 'Draw';
        }
        else{
            return false;
        }
    };
// Detect if game is over function
    function isGameOver(element){
        if(element === 'Player1'){
            result.textContent = 'Game Over! Player 1 Wins'
            return;
        }
        else if(element === 'Player2'){
            result.textContent = 'Game Over! Player 2 Wins!'
        }
        else if(element === 'Draw'){
            result.textContent = "Game Over! It's a draw!";
        }
        else if(element === false){
            return;
        }
    };

})(); // end of module 

// Factory Function used to create a player
function makePlayer(name, number, marker){
    return {
        name,
        number,
        marker
    };
}; 
