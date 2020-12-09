import { createContext, useContext, useState } from 'react'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider(props) {
    const [token, setToken] = useState(null)
    const [userDetails, setUserDetails] = useState({})

    
    return (
        <AuthContext.Provider value={{
            data: {
                userDetails
            }
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
