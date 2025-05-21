import Gameboard from "./components/Gameboard"
import Player from "./components/Player"
import { useState } from "react"


function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player intialName='Player 1' symbol='X'/>
           <Player intialName='Player 2 ' symbol='O'/>
        </ol>
        <Gameboard/>
      </div>
    </main>
  )
}

export default App
