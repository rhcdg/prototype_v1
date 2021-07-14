import axios from "axios";

const FORM_REST_API_URL = 'http://localhost:8080/api/v1';

class FormService {
    getForms(){
        return axios.get(FORM_REST_API_URL + "/forms")
    }
    
    saveForm(){
        return axios.get(FORM_REST_API_URL + "/saveform")
    }
}

export default new FormService();