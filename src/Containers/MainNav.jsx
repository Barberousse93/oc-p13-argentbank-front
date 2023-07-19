import React from "react"
import Logo from "../Components/Logo"
import NavItem from "../Components/NavItem"
import NavItemConnected from "../Components/NavItemConnected"
import { useSelector } from "react-redux"

function MainNav() {
  const user = useSelector((state) => state.userReducer)
  const userConnected = user.isConnected
  return (
    <nav className="main-nav">
      <Logo />
      {userConnected ? <NavItemConnected /> : <NavItem />}
    </nav>
  )
}

export default MainNav
