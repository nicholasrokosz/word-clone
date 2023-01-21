import React from 'react'
import GuessInput from '../GuessInput'
import Guesses from '../Guesses'
import Banner from '../Banner'
import { sample } from '../../utils'
import { WORDS } from '../../data'

const answer = sample(WORDS)
console.log(answer)

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const wonGame = guesses[guesses.length - 1] === answer
  const lostGame =
    guesses.length === 6 && guesses[guesses.length - 1] !== answer

  return (
    <>
      {wonGame && <Banner result={'happy'} numGuesses={guesses.length} />}
      {lostGame && <Banner result={'sad'} answer={answer} />}
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        gameOver={wonGame || lostGame}
      />
    </>
  )
}

export default Game
