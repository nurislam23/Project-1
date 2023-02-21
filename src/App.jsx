import './App.css'
import router from './app/index.jsx'
import {RouterProvider} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Modal from './components/Modal'
import { useState } from 'react'
import { useContext } from 'react'


function App() {



  return (
    <div className="App">
      <RouterProvider
        router={router}
      />
    </div>
  )
}

export default App
