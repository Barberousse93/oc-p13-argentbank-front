export const MEMORY = 'MEMORY'

export const checkedMemory = (checked) => {
    return (dispatch) => {
        dispatch({ type: MEMORY, payload: checked })
        if (checked){
            localStorage.setItem('ArgentBankMemory', checked)
        } else {
            localStorage.removeItem('ArgentBankMemory')
        }
    }
}