import { postData } from "../Utils/postData.js"

export const UPDATE_USER = "UPDATE_USER"

export const updateUser = (datas) => {
  const token = datas.token
  const firstName = datas.firstName
  const lastName = datas.lastName

  return async (dispatch) => {
    const autorisation = `Bearer ${token}`
    const result = await postData(
      "PUT",
      "http://localhost:3001/api/v1/user/profile",
      { firstName, lastName },
      autorisation
    )
    if (result.status === 200) {
      dispatch({ type: UPDATE_USER, payload: result.body })
    } else {
      alert("Ooops ! Il y a eu un problème !")
    }
  }
}
