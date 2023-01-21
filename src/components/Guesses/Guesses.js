import React from 'react'
import Guess from '../Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function Guesses({ guesses, answer }) {
  console.log(guesses)
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, i) => (
        <Guess guess={guesses[i]} key={i} answer={answer} />
      ))}
    </div>
  )
}

export default Guesses
