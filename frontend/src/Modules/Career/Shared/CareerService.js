import { Http } from '../../../Helper/Http';
import Axios from "axios";


const API_ENDPOINT = {
     GETUSERBYID :'users/',
     UPDATEUSER :'users/'
}

class careerService {
    constructor() {
        if (careerService._instance) {
            return careerService._instance
        }
        careerService._instance = this;
    }

// api
  getUserById(id) {
      return Http.get(API_ENDPOINT.GETUSERBYID+id)
  }
  updateUser(id,data){
      return Http.patch(API_ENDPOINT.UPDATEUSER+id,data)
  }
  
}
const instance = new careerService();

export default instance;