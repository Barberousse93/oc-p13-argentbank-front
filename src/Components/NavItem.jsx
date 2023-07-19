import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

function NavItem() {
  return (
    <div>
      <Link to="/signin" className="main-nav-item">
        <FontAwesomeIcon icon={faCircleUser} />
        Sign In
      </Link>
    </div>
  )
}

export default NavItem
