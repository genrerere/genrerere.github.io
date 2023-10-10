import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header/>
        <Main/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default App
