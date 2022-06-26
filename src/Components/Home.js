import { Link } from 'react-router-dom'


function Home(){
    return (
        <>
                <h1 className="font-mono ...">Welcome To TODO</h1>
            
            <Link className='btn btn-primary btn-lg' to='/register'>
                Register          
            </Link>
            <Link className='btn btn-secondary btn-lg' to='/login'>
                Login          
            </Link>
        </>
      )
}
export default Home;