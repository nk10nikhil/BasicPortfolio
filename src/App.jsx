import { useState } from 'react'
import React from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
