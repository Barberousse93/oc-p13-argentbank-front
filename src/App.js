import React from "react"
import MainNav from './Containers/MainNav.jsx'
import Routeur from "./Router"
import Footer from './Components/Footer.jsx'
// import { store } from './index.js'
// import { getUser } from './actions/getUser.action.js'
// import { useSelector } from 'react-redux'

function App() {
  // const tokenStocked = localStorage.getItem('ArgentBankToken')
  // if (tokenStocked) {
  //   console.log(tokenStocked)
  //   store.dispatch(getUser(tokenStocked))
  //   const test = useSelector((state) => state.userReducer)
  // console.log("test", test)
  // }
  return (
    <div className="App">
      <MainNav/>
      <Routeur />
      <Footer/>
    </div>
  )
}

export default App
