import Axios from 'axios';
import { API_PATH } from './util';

const instance = Axios.create({
    baseURL: API_PATH,
});

export default instance;
