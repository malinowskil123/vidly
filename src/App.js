import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import routes from './routes'

function App() {
  return (
    <div>
      <NavBar />
      <main className='container mt-4'>{routes}</main>
    </div>
  )
}

export default App
