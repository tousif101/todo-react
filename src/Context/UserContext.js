import {createContext, useReducer} from 'react'
import axios from 'axios'
import userReducer from './UserReducer'


const UserContext = createContext()

export const UserProvider = ({children}) => {

    const initialState = {
        user:{},
        token:'',
        isLoggedIn:false
    }
    //TODO: Register User here
    //TODO: LOGIN USer.
    //Save the bearer token 

    const [state,dispatch] = useReducer(userReducer,initialState)

    const registerUser = (user) => {
        //Set the state to a logged in user. 
        //Set bearer token in state
        //Boolean logged in?! 

        //TODO: Get host from config files
        axios.post(`http://localhost:3500/api/users/register`, {
            name: user.username,
            email: user.email,
            password: user.password,
            password2: user.password2
          })
          .then(function (response) {
            console.log("Here")
            console.log(response);
            dispatch({
                type:'REGISTER_USER',
                payload: response.data
            })

          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const loginUser = (user) => {
        //TODO: Get host from config files
        //Might also want to return the user in the login
        axios.post(`http://localhost:3500/api/users/login`, {
            email: user.email,
            password: user.password
          })
          .then(function (response) {
            console.log('LOGIN DATA:')
            console.log(response);
            dispatch({
                type:'LOGIN_USER',
                payload: response.data.token
            })
            localStorage.setItem('token', response.data.token);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <UserContext.Provider
            value={{
                loginUser,
                registerUser,
                user:state.user,
                token:state.token,
                isLoggedIn:state.isLoggedIn
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext