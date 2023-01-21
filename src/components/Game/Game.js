import React from 'react'
import GuessInput from '../GuessInput'
import Guesses from '../Guesses'

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = React.useState([])

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput guesses={guesses} setGuesses={setGuesses} />
    </>
  )
}

export default Game
