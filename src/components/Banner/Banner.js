import React from 'react'

function Banner({ result, numGuesses, answer }) {
  return (
    <div className={`banner ${result}`}>
      {result === 'happy' ? (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>
        </p>
      )}
    </div>
  )
}

export default Banner