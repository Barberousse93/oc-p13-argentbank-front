import { postData } from "../Utils/postData.js"

export const GET_USER = "GET_USER"

export const getUser = (token) => {
  return async (dispatch) => {
    const autorisation = `Bearer ${token}`
    const userProfile = await postData(
      "POST",
      "http://localhost:3001/api/v1/user/profile",
      {},
      autorisation
    )
    if (userProfile.status === 200) {
      dispatch({ type: GET_USER, payload: userProfile })
    } else {
      alert("Ooops ! Il y a eu un problème...")
    }
  }
}
