import axios from 'axios';
export default class axiosService {
    Post = (url, data, isHeaderRequired = false) => {

        return axios.post(url, data, isHeaderRequired)
    }
    get = (url, isHeaderRequired) => {

        return axios.get(url, isHeaderRequired)
    }

}   