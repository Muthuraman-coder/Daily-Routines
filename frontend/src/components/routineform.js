import { useState } from "react";
import { Useroutinecontext } from "../hooks/useroutinecontext";
import axios from "axios";
import { Usesigncontext } from "../hooks/usesigncontext";

const Routineform = () => {
    const { dispatch } = Useroutinecontext()
    const [name , setname] = useState('')
    const [body , setbody] = useState('')
    const [duration , setduration] = useState('')
    const [error , seterror] = useState(null)
    const { user } = Usesigncontext()

    const handleadd = async (e) => {
        e.preventDefault()

        if(!user){
            seterror('you must be signed in')
        }

        const routines = {name , body , duration}

        const res = await axios.post('/api/routines/' , routines ,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
              }
        })

        if(res.status){
            setname('')
            setbody('')
            setduration('')
            console.log('routine added successfully !' , res.data)
            dispatch({type:'Create-routines' , payload:res.data})
        }else{
            seterror(res.data.error)
        }
    }

    return ( 
        <div className="routineform">
            <form onSubmit={handleadd}>
                <h3>Add Daily Routines</h3>
                <label>Routine Name :</label>
                <input type="text" onChange={(e) => setname(e.target.value)} value={name} />
                <label> Description:</label>
                <input type="text" onChange={(e) => setbody(e.target.value)} value={body} />
                <label>Duration :</label>
                <input type="text" onChange={(e) => setduration(e.target.value)} value={duration} />
                <button type="summit" >Add Routine</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
     );
}
 
export default Routineform;