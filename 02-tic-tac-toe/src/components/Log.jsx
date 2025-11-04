import React from 'react'

const Log = ({name, turnState}) => {
  return (
    <ol id="log">
      {turnState.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          Player {turn.player} selected square ({turn.square.row},{turn.square.col})
        </li>
      ))}
    </ol>
  )
}

export default Log