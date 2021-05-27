import { Http } from '../../../Helper/Http';
import Axios from "axios";


const API_ENDPOINT = {
  //////// ORG/USER ////////////////
  GETBASICINFOTEAM: 'teams/team?id=',
  GETLISTMEMBERTEAM: 'teams/get/members?team=',
  GETLISTUSER: 'users',
  GETUSERINFO: 'users/user?id=',


  POSTREMOVEMEMBER: 'teams/remove/members?team=',
  POSTADDMEMBER: 'teams/add/members?team=',
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
  getListMemberTeam(id) {
    return Http.get(API_ENDPOINT.GETLISTMEMBERTEAM + id);
  }
  getListUser() {
    return Http.get(API_ENDPOINT.GETLISTUSER);
  }
  getUserInfo(id) {
    return Http.get(API_ENDPOINT.GETUSERINFO+id);
  }

  /////////////////POST
  
  postAddMember(id, data){
    return Http.post(API_ENDPOINT.POSTADDMEMBER + id, data);
  }

  ////////////////DELETE
  postRemoveMember(id, data){
    return Http.deleteData(API_ENDPOINT.POSTREMOVEMEMBER + id, data);
  }
  
}
const instance = new TeamService();

export default instance;