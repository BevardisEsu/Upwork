document.addEventListener('DOMContentLoaded', () => {
    const onePlayerButton = document.getElementById('one-player');
    const twoPlayerButton = document.getElementById('two-player');
    const player1Choices = document.querySelectorAll('#player1 .choice');
    const player2Choices = document.querySelectorAll('#player2 .choice');
    const resultText = document.getElementById('result-text');
    const player2 = document.getElementById('player2');
    const player2Title = document.getElementById('player2-title');
    const player1ChoiceDiv = document.getElementById('player1-choice');
    const player2ChoiceDiv = document.getElementById('player2-choice');

    let gameMode = '';
    let player1Choice = '';
    let player2Choice = '';

    onePlayerButton.addEventListener('click', () => {
        gameMode = 'one-player';
        player2Title.textContent = 'Computer';
        startGame();
    });

    twoPlayerButton.addEventListener('click', () => {
        gameMode = 'two-player';
        player2Title.textContent = 'Player 2';
        startGame();
    });

    function startGame() {
        document.querySelectorAll('.player').forEach(player => {
            player.style.display = 'block';
        });
        if (gameMode === 'one-player') {
            player2.style.display = 'block';
        }
        resultText.textContent = '';
        player1Choice = '';
        player2Choice = '';
        player1ChoiceDiv.innerHTML = '';
        player2ChoiceDiv.innerHTML = '';
    }

    player1Choices.forEach(choice => {
        choice.addEventListener('click', () => {
            player1Choice = choice.getAttribute('data-choice');
            player1ChoiceDiv.innerHTML = `<img src="images/${player1Choice}.png" alt="${player1Choice}">`;
            if (gameMode === 'one-player') {
                player2Choice = getComputerChoice();
                player2ChoiceDiv.innerHTML = `<img src="images/${player2Choice}.png" alt="${player2Choice}">`;
                determineWinner();
            }
        });
    });

    player2Choices.forEach(choice => {
        choice.addEventListener('click', () => {
            player2Choice = choice.getAttribute('data-choice');
            player2ChoiceDiv.innerHTML = `<img src="images/${player2Choice}.png" alt="${player2Choice}">`;
            determineWinner();
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function determineWinner() {
        if (player1Choice && player2Choice) {
            if (player1Choice === player2Choice) {
                resultText.textContent = 'It\'s a tie!';
            } else if (
                (player1Choice === 'rock' && player2Choice === 'scissors') ||
                (player1Choice === 'paper' && player2Choice === 'rock') ||
                (player1Choice === 'scissors' && player2Choice === 'paper')
            ) {
                resultText.textContent = 'Player 1 wins!';
            } else {
                resultText.textContent = 'Player 2 wins!';
            }
            player1Choice = '';
            player2Choice = '';
        }
    }
});
