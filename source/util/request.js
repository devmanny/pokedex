import Axios from 'axios';
import { API_PATH } from '.';

const instance = Axios.create({
    baseURL: API_PATH,
});

export default instance;
