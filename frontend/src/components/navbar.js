import { Link, useNavigate } from 'react-router-dom'
import { Usesigncontext } from '../hooks/usesigncontext';

const Navbar = () => {
    const { user } = Usesigncontext()
    const { dispatch } = Usesigncontext()
    const  navigate  = useNavigate()
    
    const handlelogout = () => {
        localStorage.removeItem('user')
        dispatch( {type : 'Signout'})
        navigate('/')
    }

    return(
        <header >
            <div className='navbar'>
                <Link to = '/'>
                    <h1>Daily Routines</h1>
                </Link>
            </div>
            <nav>
            {user &&( 
                <div className='logout'>
                    <span>{user.username}</span>
                    <button onClick={handlelogout}>Log Out</button>
                </div>)}
                {!user && (
                    <div className='logout'>
                        <button><a href='/'>Sign In</a></button>
                        <button><a href='/signup'>Sign Up</a></button>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar;