import React from 'react'
import Main from './Features/Main/Main'
import NavBar from './Components/NavBar/NavBar'
import ThemeContext from './Components/ThemeContext/ThemeContext'
import Login from './Features/Login/Login'
import MainHandler from './Features/Main/MainHandler'

const App = () => {
  return (
	<>

	<ThemeContext>
		<MainHandler/>
	</ThemeContext>
	
	</>
	
	
  )
}

export default App
