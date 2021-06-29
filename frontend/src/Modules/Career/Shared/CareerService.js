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
  updateUser(id,payload){
      console.log(payload);
      console.log( Http.patch(API_ENDPOINT.UPDATEUSER+id,payload));
      return Http.patch(API_ENDPOINT.UPDATEUSER+id,payload)
  }
  
}
const instance = new careerService();

export default instance;