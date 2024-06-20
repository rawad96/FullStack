const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/users'

const getAllUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

module.exports = { getAllUsers }