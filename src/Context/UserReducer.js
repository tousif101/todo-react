const userReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN_USER':
            return {
                ...state,
                token:action.payload,
                isLoggedIn:true
                
            }
        case 'REGISTER_USER':
            return {
                ...state,
                user:action.payload
            }
        default:
            return state
    }

}
export default userReducer