import axios from 'axios'

export const reqResApi =  axios.create({
    baseURL:'http://localhost:2500/v2/sextob/api/'
})