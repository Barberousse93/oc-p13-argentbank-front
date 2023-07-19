import React from "react"
import logo from "../img/argentBankLogo.png"
import { Link } from "react-router-dom"

/**
 * Logo ArgentBank
 * @returns
 */

function Logo() {
  return (
    <Link className="main-nav-logo" to="/">
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
  )
}

export default Logo
