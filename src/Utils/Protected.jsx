/* eslint-disable react/prop-types */
import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router"

/**
 * Reroutage vers page d'accueil si le user n'est pas connectée
 * @param {*} Composant
 * @returns
 */
function Protected({ children }) {
  const user = useSelector((state) => state.userReducer)
  if (user.isConnected) {
    return children
  } else {
    return <Navigate to="/" />
  }
}

export default Protected
