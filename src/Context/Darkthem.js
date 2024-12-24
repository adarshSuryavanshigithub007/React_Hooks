import React, { useContext } from 'react'
import { DarkModeContext } from './DarkModeContext'

const Darkthem = () => {
  const { toggleDarkMode,darkMode } = useContext(DarkModeContext)
  const darkmodeClick = () => {
    toggleDarkMode()
  }
  return (
    <div style={{ border: '2px solid red' }}>
      <h1>UseContext hook</h1>  <h1 className='h1'>Checking dark mode and light mode </h1>
      <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <button onClick={darkmodeClick}>Toggle Dark Mode</button>
        <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      </div>
    </div>
  )
}

export default Darkthem