import Axios from '../../Service/axiosService/axioService'
const httpService = new Axios();
var token = localStorage.getItem("userToken")
export default class noteService {
    baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/notes'

    addNote = (data, token) => {
        // return axios.post(`${BaseURL}/userSignUp`,data)
        return httpService.Post(`${this.baseUrl}/addNotes`, data, {
            headers: {
                Authorization: `${token}`,
            },
        })


    }
    getAllNotes = () => {
        return httpService.get(`${this.baseUrl}/getNotesList`, {
            headers: {
                Authorization: `${token}`,
            },
        })
    }
}