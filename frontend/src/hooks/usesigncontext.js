import { useContext } from "react"
import { Signcontext } from "../context/signcontext"

export const Usesigncontext = () => {
    const context = useContext(Signcontext)
    return context;
}