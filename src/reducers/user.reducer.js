import { GET_TOKEN } from '../actions/getToken.action.js'
import { GET_USER } from '../actions/getUser.action.js'
import { SIGN_OUT } from '../actions/signOut.action.js'

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    id: "",
    token: "",
    isConnected: false,
}

export default function userReducer(state = initialState, action) {
    // console.log('action', action.type)
    switch (action.type) {
        case GET_TOKEN:
            // console.log('action.payload',action.payload)
            return {
                ...state,
                token: action.payload,
                isConnected:true
            }
        case GET_USER:
            // console.log('action.payload',action.payload.body.email)
            return {
                ...state,
                id:action.payload.body.id,
                firstName: action.payload.body.firstName,
                lastName: action.payload.body.lastName,
                email:action.payload.body.email
            }
        case SIGN_OUT:
            return initialState
        default:
            return state            
    }
    
}