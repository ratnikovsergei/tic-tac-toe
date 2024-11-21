import './Information.css'

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  let infoText = ''

  if (isDraw) {
    infoText = 'Увы, ничья :)'
  } else if (isGameEnded) {
    if (currentPlayer === 'X') {
      infoText = 'Победили крестики!'
    } else {
      infoText = 'Победили нолики!'
    }
  } else {
    if (currentPlayer === 'X') {
      infoText = 'Ходят крестики'
    } else {
      infoText = 'Ходят нолики'
    }
  }

  return (
    <div className="information">
      <h2>{infoText}</h2>
    </div>
  )
}

export default InformationLayout
