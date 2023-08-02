import { postData } from "../Utils/postData.js"
import { getUser } from "./getUser.action.js"
import { store } from "../index.js"

export const GET_TOKEN = "GET_TOKEN"

export const getToken = (formDatas) => {
  return async (dispatch) => {
    const data = await postData(
      "POST",
      "http://localhost:3001/api/v1/user/login",
      formDatas
    )
    if (data.status === 200) {
      dispatch({ type: GET_TOKEN, payload: data.body.token })
      store.dispatch(getUser(data.body.token))
    } else if (data.status === 400) {
      alert("Utilisateur inconnu ou mot de passe incorrect")
    } else {
      alert("Ooops ! Il y a eu un problème...")
    }
  }
}
