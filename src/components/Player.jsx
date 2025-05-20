import React from 'react'
import { useState } from 'react'
const Player = ({name,symbol}) => {

    const [editing,setIsEditing] = useState(false)
    const handleEditing = function(){
        setIsEditing(!editing)
    }
  
  return (
    <>
    { editing ? (
        <input type='text' required/>
    ):(
        <li>
              <span className="player">
              <span className="player-name">{name}</span>
              <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={handleEditing}>Edit</button>
    </li>
    )}
    </>
  )
}

export default Player

// Repeat Lec 77