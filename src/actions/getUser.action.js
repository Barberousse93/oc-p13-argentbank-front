import { postData } from "../Utils/postData.js"

export const GET_USER = "GET_USER"

export const getUser = (token) => {
  return (dispatch) => {
    const autorisation = `Bearer ${token}`
    postData(
      "POST",
      "http://localhost:3001/api/v1/user/profile",
      {},
      autorisation
    ).then((userProfile) => {
      dispatch({ type: GET_USER, payload: userProfile })
    })
  }
}
