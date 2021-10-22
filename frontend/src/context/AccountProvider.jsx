import { useState, createContext, useEffect, useRef } from 'react'
import { io } from 'socket.io-client'

export const AccountContext = createContext(null)

const AccountProvider = ({ children }) => {

    const [account, setAccount] = useState()
    const [activeUsers, setActiveUsers] = useState([])

    const socket = useRef()

    useEffect(() => {
        socket.current = io('ws://localhost:8000')
    }, [])

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            socket,
            setActiveUsers
        }}
        >
            {children}
        </AccountContext.Provider>
    )
}
export default AccountProvider