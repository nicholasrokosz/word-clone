import React from 'react'

function VisualKeyboard({ letters }) {
  console.log(letters)
  return (
    <div className='keyboard'>
      {Object.keys(letters).map((char, i) => (
        <div className={`letter ${letters[char]}`.trim()} key={i}>
          {char}
        </div>
      ))}
    </div>
  )
}

export default VisualKeyboard
