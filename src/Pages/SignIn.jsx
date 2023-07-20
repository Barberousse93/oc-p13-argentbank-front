import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { getToken } from "../actions/getToken.action"
import { store } from "../index.js"
import { useSelector } from "react-redux"
import { checkedMemory } from "../actions/checkedMemory.action"

function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate()
  const user = useSelector((state) => state.userReducer)
  const userConnected = user.isConnected

  useEffect(() => {
    if (localStorage.getItem("ArgentBankMemory")) {
      setEmail(localStorage.getItem("ArgentBankEmail"))
      setPassword(localStorage.getItem("ArgentBankPW"))
      setChecked(true)
    }
  }, [])

  if (userConnected) {
    navigate("/user")
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChecked = () => {
    setChecked(!checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formDatas = { email: email, password: password }
    store.dispatch(checkedMemory(checked))
    store.dispatch(getToken(formDatas))
    if (checked) {
      localStorage.setItem("ArgentBankEmail", email)
      localStorage.setItem("ArgentBankPW", password)
    } else {
      localStorage.removeItem("ArgentBankEmail")
      localStorage.removeItem("ArgentBankPW")
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={checked}
              onChange={handleChecked}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input
            value="Sign In"
            type="submit"
            id="signInButton"
            name="signInButton"
            className="sign-in-button"
          />
        </form>
      </section>
    </main>
  )
}

export default SignIn
