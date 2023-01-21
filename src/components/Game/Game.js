import React from 'react'
import GuessInput from '../GuessInput'
import Guesses from '../Guesses'
import Banner from '../Banner'
import VisualKeyboard from '../VisualKeyboard'
import { sample, isAnswer } from '../../utils'
import { WORDS } from '../../data'

const qwerty = 'qwertyuiopasdfghjklzxcvbnm'
  .toUpperCase()
  .split('')
  .reduce((prev, next) => ({ ...prev, [next]: '' }), {})

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [lettersGuessed, setLettersGuessed] = React.useState(qwerty)
  const [answer, setAnswer] = React.useState(sample(WORDS))

  console.log(answer)

  const playAgain = () => {
    setGuesses([])
    setLettersGuessed(qwerty)
    setAnswer(sample(WORDS))
  }

  const wonGame = isAnswer(guesses[guesses.length - 1], answer)
  const lostGame =
    guesses.length === 6 && !isAnswer(guesses[guesses.length - 1], answer)

  return (
    <>
      {wonGame && (
        <Banner
          result={'happy'}
          numGuesses={guesses.length}
          playAgain={playAgain}
        />
      )}
      {lostGame && (
        <Banner result={'sad'} answer={answer} playAgain={playAgain} />
      )}
      <Guesses guesses={guesses} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        letters={lettersGuessed}
        setLetters={setLettersGuessed}
        answer={answer}
        gameOver={wonGame || lostGame}
      />
      <VisualKeyboard letters={lettersGuessed} />
    </>
  )
}

export default Game
