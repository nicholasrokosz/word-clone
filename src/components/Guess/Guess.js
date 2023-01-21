import React from 'react'
import { range } from '../../utils'

function Guess({ guess }) {
  // if (gradedGuess) {
  //   setLettersGuessed({
  //     ...lettersGuessed,
  //     ...gradedGuess.reduce(
  //       (prev, curr) => ({ ...prev, [curr.letter]: curr.status }),
  //       {}
  //     ),
  //   })
  // }

  return (
    <p className='guess'>
      {(guess ?? range(0, 5)).map(({ status, letter }, j) => (
        <span className={`cell ${guess && status}`} key={j}>
          {guess ? letter : ''}
        </span>
      ))}
    </p>
  )
}

export default Guess
