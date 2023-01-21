import React from 'react'

function Guess({ guess, index }) {
  return (
    <p className='guess' key={index}>
      {guess.split('').map((char, j) => (
        <span className='cell' key={j}>
          {char}
        </span>
      ))}
    </p>
  )
}

export default Guess
