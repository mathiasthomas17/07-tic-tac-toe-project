import React from 'react'
const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]
function Gameboard() {
  return (
    <ol id='game-board'>
        {initialGameBoard.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=><li key={colIndex}><button>{playerSymbol}</button></li>)}
            </ol>
        </li>)}
    </ol>
  )
}

export default Gameboard

// Start from 81