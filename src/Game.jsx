import { useState } from 'react'
import GameLayout from './GameLayout'

export default function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [field, setField] = useState(Array(9).fill(''))

  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  // Перезапускаем игру
  function restartGame() {
    setCurrentPlayer('X')
    setIsGameEnded(false)
    setIsDraw(false)
    setField(Array(9).fill(''))
  }

  // Определяем победителя исходя из возможных победных комбинаций
  function checkWinner(field) {
    const symbols = ['X', 'O']
    return WIN_PATTERNS.some((pattern) => {
      const [a, b, c] = pattern
      return (
        symbols.includes(field[a]) &&
        field[a] === field[b] &&
        field[a] === field[c]
      )
    })
  }

  function handleClick(index) {
    if (field[index] || isGameEnded) return

    let playingField = [...field]
    playingField[index] = currentPlayer
    setField(playingField)

    if (checkWinner(playingField)) {
      setIsGameEnded(true)
      // здесь проверяю заполненность всех ячеек и если свободных нет и победитель не определен, то устанавливаем ничью
    } else if (playingField.every((cell) => cell)) {
      setIsDraw(true)
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  return (
    <>
      <GameLayout
        field={field}
        reset={restartGame}
        onClick={handleClick}
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
    </>
  )
}
