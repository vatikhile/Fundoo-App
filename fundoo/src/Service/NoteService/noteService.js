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

    updateNote(data) {
        return httpService.Post(`${this.baseUrl}/updateNotes`, data, {
            headers: {
                Authorization: `${token}`,
            },
        })
    }
    archiveNote(data) {
        return httpService.Post(`${this.baseUrl}/archiveNotes`, data, {
            headers: {
                Authorization: `${token}`,
            },
        })
    }
    getarchieveNotes() {
        return httpService.get(`${this.baseUrl}/getArchiveNotesList`, {
            headers: {
                Authorization: `${token}`,
            },
        })
    }

    getTrashNotes(){
        return httpService.get(`${this.baseUrl}/getTrashNotesList`, {
            headers: {
                Authorization: `${token}`,
            },
        })
    }
    trashNote(data){
        return httpService.Post(`${this.baseUrl}/trashNotes`, data, {
            headers: {
                Authorization: `${token}`,
            },
        })
    }
    changesColorNotes(data){
        return httpService.Post(`${this.baseUrl}/changesColorNotes`, data, {
            headers: {
                Authorization: `${token}`,
            },
        })
    }

    
}