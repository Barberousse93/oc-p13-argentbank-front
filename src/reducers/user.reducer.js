import { GET_TOKEN } from '../actions/getToken.action.js'
import { GET_USER } from '../actions/getUser.action.js'
import { SIGN_OUT } from '../actions/signOut.action.js'
import { MEMORY } from '../actions/checkedMemory.action.js'

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    id: "",
    token: "",
    isConnected: false,
    rememberMe: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOKEN:
            return {
                ...state,
                token: action.payload,
                isConnected:true
            }
        case GET_USER:
            return {
                ...state,
                id:action.payload.body.id,
                firstName: action.payload.body.firstName,
                lastName: action.payload.body.lastName,
                email:action.payload.body.email
            }
        case SIGN_OUT:
            return {initialState}
        case MEMORY:
            return {
                ...state,
                rememberMe: action.payload
            }
                
        default:
            return state            
    }
    
}