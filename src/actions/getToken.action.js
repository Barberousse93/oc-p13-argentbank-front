import { postData } from '../Utils/postData.js'
import { getUser } from './getUser.action.js'
import { store } from '../index.js'

export const GET_TOKEN = "GET_TOKEN"


export const getToken = (formDatas) => {
    return (dispatch) => { 
        postData("http://localhost:3001/api/v1/user/login", formDatas).then(
            (data) => {
                // alert(data.message)
                if (data.status === 200) {
                    dispatch({ type: GET_TOKEN, payload: data.body.token })
                    store.dispatch(getUser(data.body.token))
                } else {
                    alert(data.message)
                    alert('Utilisateur inconnu ou mot de passe  incorrect')
                }
            })
        
    }
}
