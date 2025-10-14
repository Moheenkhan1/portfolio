import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <div className=' bg-[#12172a]  ' >

    <ToastContainer/>
    <Navbar/>
    <Hero/>
    <Footer/>
    </div>
    </>
  )
}

export default App