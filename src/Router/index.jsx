import React from "react"
import { Routes, Route } from "react-router"
import HomePage from "../Pages/HomePage.jsx"
import SignIn from "../Pages/SignIn.jsx"
import User from "../Pages/User.jsx"
import Erreur404 from "../Pages/Erreur404.jsx"
import Protected from "../Utils/Protected.jsx"

function Routeur() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      {/* Page protégée : re-reroutage vers accueil si user non connecté */}
      <Route
        path="/user"
        element={
          <Protected>
            <User />
          </Protected>
        }
      ></Route>
      {/* // */}
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="*" element={<Erreur404 />}></Route>
    </Routes>
  )
}

export default Routeur
