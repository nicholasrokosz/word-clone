import React from 'react'
import { checkGuess } from '../../game-helpers'
import { sample } from '../../utils'
import { WORDS } from '../../data'
import { range } from '../../utils'

const answer = sample(WORDS)
console.log(answer)

function Guess({ guess }) {
  const gradedGuess = checkGuess(guess, answer)

  return (
    <p className='guess'>
      {(gradedGuess ?? range(0, 5)).map(({ status, letter }, j) => (
        <span className={`cell ${gradedGuess && status}`} key={j}>
          {gradedGuess ? letter : ''}
        </span>
      ))}
    </p>
  )
}

export default Guess
