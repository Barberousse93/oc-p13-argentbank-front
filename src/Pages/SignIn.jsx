import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { postData } from "../Utils/postData.js"

function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false)

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

    postData("http://localhost:3001/api/v1/user/login", formDatas).then(
      (data) => {
        // console.log(data) // JSON data parsed by `data.json()` call
        alert(data.message)
        if (data.status === 200) {
          if (checked) {
            localStorage.setItem("ArgentBankToken", data.body.token)
          } else {
            localStorage.removeItem("ArgentBankToken")
          }

          console.log("token stocké :", localStorage.getItem("ArgentBankToken"))

          const autorisation = { Authorization: `Bearer ${data.body.token}` }
          postData(
            "http://localhost:3001/api/v1/user/profile",
            autorisation
          ).then((userProfile) => {
            console.log(userProfile)
            alert(
              "Welcome back " +
                userProfile.body.firstName +
                " " +
                userProfile.body.lastName +
                " !"
            )
          })
        }
      }
    )
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
