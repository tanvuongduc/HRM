import { Http } from '../../../Helper/Http';
import Axios from "axios";


const API_ENDPOINT = {
  //////// ORG/USER ////////////////
  GETBASICINFOTEAM: 'teams/',
  GETLISTMEMBER: 'teams/',
  GETLISTUSER: 'users',
  GETUSERINFO: 'users/',


  POSTREMOVEMEMBER: 'teams/',
  POSTADDMEMBER: 'teams/',
}

class TeamService {
    constructor() {
        if (TeamService._instance) {
            return TeamService._instance
        }
        TeamService._instance = this;
    }

    ///////////////// API USER ///////////////////
  // get data
  getBasicInfoTeam(id) {
    return Http.get(API_ENDPOINT.GETBASICINFOTEAM + id);
  }
  getListMember(id) {
    return Http.get(API_ENDPOINT.GETLISTMEMBER + id + '/members');
  }
  getListUser() {
    return Http.get(API_ENDPOINT.GETLISTUSER);
  }
  getUserInfo(id) {
    return Http.get(API_ENDPOINT.GETUSERINFO+id);
  }

  /////////////////POST
  
  postAddMember(id, data){
    return Http.post(API_ENDPOINT.POSTADDMEMBER + id +  '/members', data);
  }

  ////////////////DELETE
  postRemoveMember(id, data){
    return Http.deleteData(API_ENDPOINT.POSTREMOVEMEMBER  + id + '/members', data);
  }
  
}
const instance = new TeamService();

export default instance;