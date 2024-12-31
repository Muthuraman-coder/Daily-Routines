import { Useroutinecontext } from "../hooks/useroutinecontext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import axios from 'axios'
import { Usesigncontext } from "../hooks/usesigncontext"

const Routines = ({routine}) => {
    const {dispatch} = Useroutinecontext()
    const { user } = Usesigncontext()

    const handledelete = async () => {

        if(!user){
            return
        }
        const res = await axios.delete('/api/routines/' + routine._id , 
            { headers: {
            'Authorization': `Bearer ${user.token}`
          }})

        if(res.status){
            dispatch({type:'Delete-routine' , payload : res.data})
        }
    }
    return ( 
        <div className="routines">
            <h4>{routine.name}</h4>
            <p><strong>Description :</strong>{routine.body}</p>
            <p><strong>Duration :</strong> {routine.duration}</p>
            <p>{formatDistanceToNow(new Date(routine.createdAt), { addSuffix: true })}</p>
            <img src="/deleteicon.svg" onClick={handledelete} />
        </div>
     );
}
 
export default Routines;