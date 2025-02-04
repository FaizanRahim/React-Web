import React from 'react'
import Headers from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Footer from './Pages/Footer'


const App = () => {
  return (
    <div>
      <Headers/>
      <Home/>
      <About/>
      <Contact/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App