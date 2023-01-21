export function checkGuess(guess, answer) {
  if (!guess) {
    return null
  }

  console.log(guess)
  const guessChars = guess.toUpperCase().split('')
  const answerChars = answer.split('')

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index]

    let status
    if (guessChar === answerChar) {
      status = 'correct'
    } else if (answerChars.includes(guessChar)) {
      status = 'misplaced'
    } else {
      status = 'incorrect'
    }
    return {
      letter: guessChar,
      status,
    }
  })
}
