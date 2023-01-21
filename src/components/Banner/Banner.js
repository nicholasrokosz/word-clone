import React from 'react'

function Banner({ result, numGuesses, answer, playAgain }) {
  return (
    <div className={`banner ${result}`}>
      {result === 'happy' ? (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numGuesses} {numGuesses === 1 ? 'guess' : 'guesses'}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>
        </p>
      )}
      <button onClick={playAgain}>play again</button>
    </div>
  )
}

export default Banner
