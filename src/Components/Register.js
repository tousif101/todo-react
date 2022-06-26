import {useContext,useState} from 'react'
import UserContext from '../Context/UserContext'

function Register() {

    

    //const[user, setUser] = useState({}) //Empty User Object
    const[username, setUsername] = useState({}) 
    const[email, setEmail] = useState('') 
    const[password, setPassword] = useState('') 
    const[password2, setPassword2] = useState('') 

    const {registerUser} = useContext(UserContext)

    const handleUserNameChange = (e) => {
        setUsername(e.target.value)
        //setUser({...user, username:e.target.value})
    }

    const handleEmailChange = (e) => {
        // setUser({...user, email:e.target.value})
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        //setUser({...user, password:e.target.value})
        setPassword(e.target.value)
    }

    const handlePassword2Change = (e) => {
        //setUser({...user, password2:e.target.value})
        setPassword2(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        //Do if check over here.
        const user = {
            username:username,
            email:email,
            password:password,
            password2:password2
        }
        console.log(user)
        registerUser(user)    
    }
    
    //TODO: Change on changes for each one. 
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb=8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <div className='relative'>
                            <input 
                                type='text'
                                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Username'
                                onChange={handleUserNameChange}
                            />
                            <input 
                                type='text'
                                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Email'
                                onChange={handleEmailChange}
                            />
                            <input 
                                type='password'
                                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Password'
                                onChange={handlePasswordChange}
                            />
                            <input 
                                type='password'
                                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Confirm Password'
                                onChange={handlePassword2Change}
                            />

                            <button
                                type='submit'
                                className='btn btn-success'
                                >Register
                            </button>
           
                        </div>
                  
                    </div>
             
                </form>
            </div>
        </div>
    )
}

export default Register