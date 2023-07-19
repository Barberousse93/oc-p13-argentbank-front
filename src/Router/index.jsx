import React from "react"
import { Routes, Route } from "react-router"
import HomePage from "../Pages/HomePage.jsx"
import SignIn from "../Pages/SignIn.jsx"
import User from "../Pages/User.jsx"

function Routeur() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/user" element={<User />}></Route>
    </Routes>
  )
}

export default Routeur
