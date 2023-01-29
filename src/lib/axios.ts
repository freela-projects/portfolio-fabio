import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.ipify.org?format=json',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
    }
})

export default instance