import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom"

export const PublicRoute = ({ children }) => {

    const { authState: { logged } } = useContext(AuthContext)

    console.log(logged, 'not logged');

  return (!logged) ? children : <Navigate to = "/marvel" />
  
}
