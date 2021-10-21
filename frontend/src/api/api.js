import axios from 'axios'

const url = 'http://localhost:5000'

export const addUser = async (data) => {
    try {
        return await axios.post(`${url}/add`, data)
    } catch(error) {
        console.log('Error while calling addUser api', error)
    }
}

export const getUsers = async () => {
    try {
        let users = await axios.get(`${url}/users`)
        return users.data
    } catch(error) {
        console.log('Error while calling getUsers api', error)
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)

    } catch(error) {
        console.log('Error while calling setConversation api', error)
    }
}

export const getConversation = async (data) => {
    try {
        let conversation = await axios.post(`${url}/conversation/get`, data)
        return conversation.data
    } catch(error) {
        console.log('Error while calling getConversation api', error)
    }
}

export const newMessage = async (data) => {
    try {
        // console.log(data)
        await axios.post(`${url}/message/add`, data)
    } catch(error) {
        console.log('Error while calling newMessage api', error)
    }
}

export const getMessage = async (data) => {
    try {
        return await axios.get(`${url}/message/get/${data}`)
    } catch(error) {
        console.log('Error while calling getMessage api', error)
    }
}