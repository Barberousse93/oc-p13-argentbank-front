/* eslint-disable react/prop-types */
import React from "react"
import { Route, Navigate } from "react-router-dom"

const GuardedRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? <Component {...props} /> : <Navigate to="/"></Navigate>
      }
    />
  )
}

export default GuardedRoute
