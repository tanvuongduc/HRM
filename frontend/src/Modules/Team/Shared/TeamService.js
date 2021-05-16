import { Http } from '../../../Helper/Http';
import Axios from "axios";


const API_ENDPOINT = {
  //////// ORG/USER ////////////////
  GETBASICINFOTEAM: 'teams/team?id=',
  GETLISTMEMBERTEAM: 'teams/get/members?team=',
  GETLISTUSER: 'users',


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

  /////////////////POST
  
  postAddMember(id, data){
    return Http.post(API_ENDPOINT.POSTADDMEMBER + id, data);
  }

  ////////////////DELETE
  postRemoveMember(id, data){
    return Axios.delete(API_ENDPOINT.POSTREMOVEMEMBER + id, data, { Authorization: `Bearer ${window.localStorage.getItem("token") || ""}`});
  }
  
}
const instance = new TeamService();

export default instance;