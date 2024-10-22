import React from 'react'
import Weather from './components/Weather'

import clear from './assets/eXZ6Ba.webp'


const App = () => {





  return (
    <div className='app' style={{backgroundImage:`url(${clear})` }}>
      <Weather/>
    </div>
  )
}

export default App
