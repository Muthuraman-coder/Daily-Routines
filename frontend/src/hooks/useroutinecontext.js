import { Routinecontext } from "../context/routinecontext"
import { useContext } from "react"

export const Useroutinecontext = () => {
  const context = useContext(Routinecontext)
  return context;
}