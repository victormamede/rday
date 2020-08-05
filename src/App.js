import React, { useState } from 'react'
import Enter from './pages/enter'
import BDay from './pages/bday'

function App() {
  const [lightsOn, lightHandler] = useState(false)

  return (
    <div className='App'>
      {lightsOn ? <BDay /> : <Enter onSwitchClick={() => lightHandler(true)} />}
    </div>
  )
}

export default App
