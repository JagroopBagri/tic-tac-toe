// Module Pattern IIFE
const game = (function(){
    let squares = document.querySelectorAll('.square'); // Array of each box on game-board
    let playButton = document.querySelector('.play'); // Play button
    let turn = 0; // turn counter
    
    // Start Game when play button is clicked
    playButton.addEventListener('click', function (){
        let player1 = getPlayer(1);
        let player2 = getPlayer(2);
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
                console.log(turn);
                if(turn === 9){
                    return 'Error';
                };
                (turn === 0 || turn % 2 === 0) ? marker = 'X' : marker = 'O';
                if(box.textContent !== ''){
                    return;
                }
                box.textContent = marker;
                turn ++;
            });
        });
    };
})();

// Factory Function used to create a player
function makePlayer(name, number, marker){
    return {
        name,
        number,
        marker
    };
}; 
