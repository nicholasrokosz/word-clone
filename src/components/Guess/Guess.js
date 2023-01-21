import React from 'react'
import { checkGuess } from '../../game-helpers'
import { range } from '../../utils'

function Guess({ guess, answer }) {
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
