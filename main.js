const cells = document.querySelectorAll('.cell');
        const winnerText = document.getElementById('winner');
        let currentPlayer = 'X';
        let board = ['', '', '', '', '', '', '', '', ''];

        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                const cellIndex = Array.from(cells).indexOf(cell);
                if (board[cellIndex] === '' && winnerText.textContent === '') {
                    board[cellIndex] = currentPlayer;
                    cell.textContent = currentPlayer;
                    if (checkWinner()) {
                        winnerText.textContent = `${currentPlayer} Wins!`;
                    } else if (board.every(cell => cell !== '')) {
                        winnerText.textContent = 'It\'s a Draw!';
                    } else {
                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    }
                }
            });
        });

        function checkWinner() {
            const winningCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            return winningCombinations.some(combination => {
                return combination.every(index => board[index] === currentPlayer);
            });
        }
