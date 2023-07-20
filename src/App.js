import React from "react"
import MainNav from './Containers/MainNav.jsx'
import Routeur from "./Router"
import Footer from './Components/Footer.jsx'

function App() {  
  return (
    <div className="App">
      <MainNav/>
      <Routeur />
      <Footer/>
    </div>
  )
}

export default App
