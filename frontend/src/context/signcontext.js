import { createContext, useEffect, useReducer } from "react";

export const Signcontext = createContext()

export const signreducer = ( state , action ) => {
    switch(action.type){
        case 'Signin' :
            return { user : action.payload}
        case 'Signout' :
            return { user : null}
        default :
            return state
    }
}

export const Signcontextprovider = ({ children }) => {
    const [state , dispatch] = useReducer( signreducer , {user : null})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            dispatch({type : 'Signin' , payload : user})
        }
    } , [] )

    console.log('signcontext state :' , state)

    return(
        <Signcontext.Provider value = {{...state , dispatch}} >
            {children}
        </Signcontext.Provider>
    )

}