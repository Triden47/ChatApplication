import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext(null)

const UserProvider = ({ children }) => {
    const [person, setPerson] = useState({})

    // useEffect(() => {
    //     console.log(person.googleId)
    // }, [person])
    return (
        <UserContext.Provider value={{
            person,
            setPerson
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider