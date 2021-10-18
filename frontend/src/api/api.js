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
        return await axios.get(`${url}/users`).data
    } catch(error) {
        console.log('Error while calling getUsers api', error)
    }
}