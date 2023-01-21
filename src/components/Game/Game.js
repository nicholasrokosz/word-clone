import React from 'react'
import GuessInput from '../GuessInput'
import Guesses from '../Guesses'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
const startingArray = [...Array(NUM_OF_GUESSES_ALLOWED).fill('     ')]
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState(startingArray)

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput guesses={guesses} setGuesses={setGuesses} />
    </>
  )
}

export default Game
