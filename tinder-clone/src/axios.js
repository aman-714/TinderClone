import axios from 'axios'

const instance = axios.create({
    baseURL:'https://tinderbackend57.herokuapp.com/'
})

export default instance;