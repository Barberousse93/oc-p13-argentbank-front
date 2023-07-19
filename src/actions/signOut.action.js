export const SIGN_OUT = "SIGN_OUT"

export const signOut = () => {
    return (dispatch)=>{
        dispatch({type:SIGN_OUT})
    }
}