import axios from 'axios';


const sistemaApi = axios.create({
    baseURL: 'http://localhost:2500/v2/sextob/api/'
});

export default sistemaApi;