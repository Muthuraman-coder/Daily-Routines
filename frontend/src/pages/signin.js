import axios from "axios";
import { useState } from "react";
import { Usesigncontext } from "../hooks/usesigncontext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const [ username , setusername ] = useState('')
    const [ password , setpassword] = useState('')
    const [error , seterror ] = useState(null)
    const { dispatch } = Usesigncontext()
    const navigate = useNavigate()

    const handlesignin = async (e) => {
        e.preventDefault()

        const signindata =  {username , password };
        try{
            const res = await axios.post('/api/sign/signin' , signindata)
            localStorage.setItem('user' , JSON.stringify(res.data))
            dispatch({type:'Signin' , payload : res.data})
            navigate('/home')
        }catch(error){
            seterror(error.response.data.error)
        }
    }

    return ( 
            <form className="sigup" onSubmit={handlesignin}>
                <label>Username:</label>
                <input value={username} onChange={(e) => setusername(e.target.value)}/>
                <label>Password:</label>
                <input value={password} onChange={(e) => setpassword(e.target.value)}/>
                <button type="summit"> Sign In</button>
                {error && <p>{error}</p>}
                <p>Don't have an account ? <a href="/signup">Sign Up</a></p>
            </form>
     );
}
 
export default Signin;