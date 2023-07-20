import React from "react"
import { Routes, Route } from "react-router"
// import { Navigate } from "react-router-dom"
import HomePage from "../Pages/HomePage.jsx"
import SignIn from "../Pages/SignIn.jsx"
import User from "../Pages/User.jsx"
// import { useSelector } from "react-redux"
// import GuardedRoute from "../Utils/GuardedRoute.jsx"

function Routeur() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      {/* <GuardedRoute
        path="/signin"
        element={<SignIn />}
        auth
        true
      ></GuardedRoute> */}
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/user" element={<User />}></Route>
    </Routes>
  )
}

export default Routeur
