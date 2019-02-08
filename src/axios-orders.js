import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-maron-burger.firebaseio.com/'
});

export default instance;

