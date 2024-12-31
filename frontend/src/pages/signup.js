import axios from "axios";
import { useState } from "react";
import { Usesigncontext } from "../hooks/usesigncontext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [ username , setusername ] = useState('')
    const [ password , setpassword] = useState('')
    const [error , seterror ] = useState(null)
    const { dispatch } = Usesigncontext()
    const navigate = useNavigate()

    const handlesignup = async (e) => {
        e.preventDefault()

        const signupdata  = {username , password }
        
        try{
            const res = await axios.post('/api/sign/signup' , signupdata)
            if(res.status){
                localStorage.setItem('user' , JSON.stringify(res.data))
                dispatch({type : 'Signin' , payload : res.data})
                navigate('/')
            }
        }catch(error){
            seterror(error.response.data.error)
        }
        
    }

    return ( 
            <form className="sigup" onSubmit={handlesignup}>
                <label>Username:</label>
                <input value={username} onChange={(e) => setusername(e.target.value)}/>
                <label>Password:</label>
                <input value={password} onChange={(e) => setpassword(e.target.value)}/>
                <button type="summit"> Sign Up</button>
                {error && <p>{error}</p>}
                <p>if you already have account , then <a href="/">Sign In</a></p>
            </form>
     );
}
 
export default Signup;