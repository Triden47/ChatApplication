import { useState, createContext } from 'react'

export const DrawerContext = createContext(null)

const DrawerProvider = ({ children }) => {

    const [drawer, setDrawer] = useState(false)
    console.log(drawer)

    return (
        <DrawerContext.Provider value={{
            drawer,
            setDrawer
        }}
        >
            {children}
        </DrawerContext.Provider>
    )
}
export default DrawerProvider