import { createContext } from 'react'
import { useState } from 'react'

export const userContext = createContext({})

export function UserContextProvider({ children }) {
    const [userInfo, setUserinfo] = useState({})
    return (
        <userContext.Provider value={{ userInfo, setUserinfo }}>
            {children}
        </userContext.Provider >
    )
}