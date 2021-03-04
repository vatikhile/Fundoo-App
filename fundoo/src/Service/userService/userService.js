
import Axios from '../../Service/axiosService/axioService'
const httpService = new Axios();

export default class userService {
    baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/'
    userRegister = (data) => {
        // return axios.post(`${BaseURL}/userSignUp`,data)
        return httpService.Post(`${this.baseUrl}user/userSignUp`, data);
    }

    login = (data) => {
        return httpService.Post(`${this.baseUrl}/user/login`, data);
    }
    resetPass = (data) => {
        return httpService.Post(`${this.baseUrl}user/reset`, data);
    }
    resetpassword = (data, token) => {
        return httpService.Post(`${this.baseUrl}user/reset-password`, data, {
            headers: {
                Authorization: `${token}`,
            },
        });
    }

}