import {useState,useContext} from 'react'
import UserContext from '../Context/UserContext'
import { Navigate } from "react-router-dom";

function Login() {
    const[email, setEmail] = useState('') 

    const[password, setPassword] = useState('') 
    
    const {loginUser,isLoggedIn} = useContext(UserContext)

   // let navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const passwordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            email:email,
            password:password,
        }
        loginUser(user)   
    }
    return (

    
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb=8 gap-8'>
            {isLoggedIn && (
            <Navigate to="/todo" replace={true} />
          )}
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <div className='relative'>
    
                            <input 
                                type='text'
                                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Email'
                                onChange={handleEmailChange}
                            />
                            <input 
                                type='text'
                                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Password'
                                onChange={passwordChange}
                            />
                            <button
                                type='submit'
                                className='btn btn-success'>Login
                            </button>
           
                        </div>
                  
                    </div>
             
                </form>
            </div>
        </div>
    )

}

export default Login