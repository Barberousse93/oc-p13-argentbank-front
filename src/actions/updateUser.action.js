import { updateDatas } from "../Utils/updateDatas.js"

export const UPDATE_USER = "UPDATE_USER"

export const updateUser = (datas) => {
  const token = datas.token
  const firstName = datas.firstName
  const lastName = datas.lastName

  return (dispatch) => {
    const autorisation = `Bearer ${token}`
    updateDatas(
      "http://localhost:3001/api/v1/user/profile",
      { firstName, lastName },
      autorisation
    ).then((promise) => {
      if (promise.status === 200) {
        dispatch({ type: UPDATE_USER, payload: promise.body })
      } else {
        alert("Ooops ! Il y a eu un problème !")
      }
    })
  }
}
