import React from 'react'
import Guess from '../Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function Guesses({ guesses }) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, i) => (
        <Guess
          // guess={
          //   guesses[i] &&
          //   guesses[i].reduce((prev, next) => prev + next.letter, '')
          // }
          guess={guesses[i]}
          key={i}
        />
      ))}
    </div>
  )
}

export default Guesses
