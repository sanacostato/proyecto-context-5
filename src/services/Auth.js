import axios from 'axios';

const URL_ROOT = process.env.REACT_APP_API_URL;


const loginService = async (data) => {
    const response = await axios.post(`${URL_ROOT}/auth/login`, data);
    return response.data;
};

const registerService = async (data) => {
    const response = await axios.post(`${URL_ROOT}/usuarios`,data);
    return response.data;
};

 export { loginService, registerService };