import React from 'react'
import './GameLogic.css'

function GameLogic() {
  return (
    <div className='game_logic'>
        <div className='input'>
            <input id='input' type='text' placeholder="What's your guess?" />
        </div>
        <div>
            <button>Check Me</button>
            <button>Restart</button>
        </div>

    
    </div>
  )
}

export default GameLogic;