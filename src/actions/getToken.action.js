import { postData } from '../Utils/postData.js'
import { getUser } from './getUser.action.js'
import { store } from '../index.js'

export const GET_TOKEN = "GET_TOKEN"


export const getToken = (formDatas,checked) => {
    return (dispatch) => { 
        postData("http://localhost:3001/api/v1/user/login", formDatas).then(
            (data) => {
                alert(data.message)
                if (data.status === 200) {
                    // console.log(data.body.token)

                    dispatch({ type: GET_TOKEN, payload: data.body.token })
                    
                    if (checked) {
                        localStorage.setItem("ArgentBankToken", data.body.token)
                    } else {
                        localStorage.removeItem("ArgentBankToken")
                    }
                    store.dispatch(getUser(data.body.token))
                }
            })
        
    }
}
