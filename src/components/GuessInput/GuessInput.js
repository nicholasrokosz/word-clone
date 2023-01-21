import React from 'react'

function GuessInput({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (guess.length < 5) {
      window.alert('Guess must be 5 letters long.')
      return
    }
    // console.log(guess)
    const newGuesses = [...guesses]
    newGuesses[newGuesses.indexOf('     ')] = guess
    setGuesses(newGuesses)
    setGuess('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput
