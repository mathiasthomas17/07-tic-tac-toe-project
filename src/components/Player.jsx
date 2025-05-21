import React from 'react'
import { useState } from 'react'
const Player = ({intialName,symbol}) => {

    const [editing,setIsEditing] = useState(false)
    const [name,setName] = useState(intialName)

    // handle Edit / Save
    const handleEditing = function(){
        setIsEditing((editing)=>!editing)
    }

    // Handle Input Value Change
    const handleChange = function(e){
      setName(e.target.value)
    }
    let playerName = <span className="player-name">{name}</span>
    if(editing){
      playerName = <input type='text' required value={name} onChange={handleChange}/>
    }
  return (
    <li>
              <span className="player">
                {playerName}
              <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={handleEditing}>{editing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player

// Repeat Lec 77