
import { useState, useEffect } from "react"

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  const toggleDarkMode = () => {
    setDarkMode(darkMode => !darkMode) 
  }

  return (
    <div className="container">
      <div className='App'>
        <Navbar 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Main 
          darkMode={darkMode}
        />
      </div>
    </div>

  )
}

function Navbar({darkMode, toggleDarkMode}) {
  const darkModeTheme = darkMode ? "dark" : ''
  return (
    <nav className={`${darkModeTheme}`}>
      <h1>Hihi</h1>
      <div className="theme">
        <p>Light</p>
        <div className="toggle-darkmode" onClick={() => toggleDarkMode()}>
          <div className="toggle-circle"></div>
        </div>
        <p>Black</p>
      </div>
    </nav>
  )
}

function Main({darkMode}) {
  const darkModeTheme = darkMode ? "dark" : ""
  return (
    <div className={`Main ${darkModeTheme}`}>
      <p className='text'>{darkMode ? "Dark" : "White"}</p>
    </div>
  )
}