import React from 'react'
import Guess from '../Guess'

function Guesses({ guesses }) {
  return (
    <div className='guess-results'>
      {guesses.map((guess, i) => (
        <Guess guess={guess} key={i} />
      ))}
    </div>
  )
}

export default Guesses
