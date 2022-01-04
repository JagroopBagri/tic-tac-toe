const game = (function(){
    let squares = document.querySelectorAll('.square'); // Array of each box on game-board
    let playButton = document.querySelector('.play'); // Play button
    playButton.addEventListener('click', function (){
        let player1 = getPlayer(1);
        let player2 = getPlayer(2);
        console.log(player1);
        console.log(player2);
    });
    function getPlayer(num){
        let marker;
        (num === 1) ? marker = 'X' : marker = 'O';
        let playerName = document.querySelector(`#player${num}`).value;
        return makePlayer(playerName, num, marker)
    };
    

})();

function makePlayer(name, number, marker){
    return {
        name,
        number,
        marker
    };
};
