import { useState } from 'react'

//components
import Header from "./Header"
import SearchBox from './SearchBox'
import Conversation from './Conversation'



const Menu = () => {
    const [ search, setSearch ] = new useState('')

    return (
        <>
            <Header/>
            <SearchBox setSearch={setSearch}/>
            <Conversation search={search}/>
        </>
    )
}

export default Menu