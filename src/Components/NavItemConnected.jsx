import React from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { signOut } from "../actions/signOut.action"
import { store } from ".."

function NavItemConnected() {
  const navigate = useNavigate()
  const handleSignOut = () => {
    store.dispatch(signOut())
    navigate("/")
  }
  const user = useSelector((state) => state.userReducer)
  return (
    <div>
      <Link to="/user" className="main-nav-item">
        <FontAwesomeIcon icon={faCircleUser} />
        {user.firstName}
      </Link>
      <a onClick={handleSignOut} className="main-nav-item">
        <FontAwesomeIcon icon={faSignOut} />
        Sign Out
      </a>
    </div>
  )
}

export default NavItemConnected
