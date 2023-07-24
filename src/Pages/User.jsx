import React from "react"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { store } from ".."
import { updateUser } from "../actions/updateUser.action"

function User() {
  const user = useSelector((state) => state.userReducer)

  const [formVisible, setFormVisible] = useState(false)
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setlastName] = useState(user.lastName)

  const userConnected = user.isConnected
  const token = user.token
  const navigate = useNavigate()

  useEffect(() => {
    if (!userConnected) {
      navigate("/")
    }
  }, [])

  function onClickCancel() {
    setFormVisible(!formVisible)
    setFirstName(user.firstName)
    setlastName(user.lastName)
  }

  const handleFirstName = (e) => {
    e.target.value
      ? setFirstName(e.target.value[0].toUpperCase() + e.target.value.slice(1))
      : user.firstName
  }

  const handleLastName = (e) => {
    e.target.value ? setlastName(e.target.value.toUpperCase()) : user.lastName
  }

  const SubmitForm = (e) => {
    e.preventDefault()
    const formDatas = { token, firstName, lastName }
    store.dispatch(updateUser(formDatas))
    setFormVisible(false)
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        {formVisible ? (
          <>
            <h1>Welcome back</h1>
            <div className="formContainer">
              <form onSubmit={SubmitForm}>
                <div className="inputText">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={handleFirstName}
                    placeholder={user.firstName}
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lasrName"
                    onChange={handleLastName}
                    placeholder={user.lastName}
                  />
                </div>
                <div className="inputButtons">
                  <input
                    className="inputButton"
                    type="button"
                    id="cancel"
                    name="cancel"
                    value="Cancel"
                    onClick={() => onClickCancel()}
                  />
                  <input
                    className="inputButton"
                    type="submit"
                    id="save"
                    name="save"
                    value="Save"
                  />
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {user.firstName} {user.lastName}
            </h1>
            <button
              onClick={() => setFormVisible(!formVisible)}
              className="edit-button"
            >
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}

export default User
