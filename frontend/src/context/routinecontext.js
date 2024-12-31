import { createContext, useReducer } from 'react'

export const Routinecontext = createContext()

export const Routinereducer = (state, action) => {
  switch (action.type) {
    case 'Set-routines':
      return { 
        routines: action.payload 
      }
    case 'Create-routines':
      return { 
        routines: [action.payload, ...state.routines] 
      }
    case 'Delete-routine':
      return{
        routines: state.routines.filter((routine) => routine._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const RoutineContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Routinereducer, { 
    routines: null
  })
  
  return (
    <Routinecontext.Provider value={{ ...state, dispatch }}>
      { children }
    </Routinecontext.Provider>
  )
}