import axios from "axios"

export default class CandidateService {
    getCandidates() {
        return axios.get("http://localhost:8080/candidates")
    }

    getById(id){
        return axios.get("http://localhost:8080/candidates/getbyid?candidateId=" + id)
    }
}