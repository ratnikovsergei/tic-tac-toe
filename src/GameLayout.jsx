import './Game.css'
import Information from './components/Information/Information'
import Field from './components/Field/Field'
import PropTypes from 'prop-types'

const GameLayout = ({
  currentPlayer,
  isGameEnded,
  isDraw,
  field,
  onClick,
  reset,
}) => {
  return (
    <>
      <div className="game">
        <Information
          currentPlayer={currentPlayer}
          isGameEnded={isGameEnded}
          isDraw={isDraw}
        />
        <Field field={field} onClick={onClick} />
        <button className="reset-button" onClick={reset}>
          Играть сначала
        </button>
      </div>
    </>
  )
}

export default GameLayout
