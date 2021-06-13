import { Http } from '../../../Helper/Http';
import Axios from "axios";


const API_ENDPOINT = {
  //////// ORG/USER ////////////////

  GETBASICINFOTEAM: 'teams/',
  GETLISTMEMBERTEAM: 'teams/',
  GETLISTUSER: 'users',
  GETLIStDEPARTMENT:'departments',
  GETLISTTEAM:'teams',
  ADDNEWTEAM:'teams',
  UPDATETEAM:'teams/',
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
  getListTeams() {
    return Http.get(API_ENDPOINT.GETLISTTEAM);
  }
  getBasicInfoTeam(id) {
    return Http.get(API_ENDPOINT.GETBASICINFOTEAM + id);
  }
  getListMemberTeam(id) {
    return Http.get(API_ENDPOINT.GETLISTMEMBERTEAM + id+"/members");
  }
  getListUser() {
    return Http.get(API_ENDPOINT.GETLISTUSER);
  }
  getListDepartment(){
    return Http.get(API_ENDPOINT.GETLIStDEPARTMENT);
  }
  /////////////////POST
  postAddMember(id, data){
    return Http.post(API_ENDPOINT.POSTADDMEMBER + id+"/members",data);
  }
  postNewTeam(data){
    return Http.post(API_ENDPOINT.ADDNEWTEAM ,data);
  }
  updateTeam(id,data){
    return Http.patch(API_ENDPOINT.UPDATETEAM +id,data);
  }

  ////////////////DELETE
  deleteRemoveMember(id, data){
    return Http.deleteData(API_ENDPOINT.POSTREMOVEMEMBER + id+"/members", data);
  }
  
}
const instance = new TeamService();

export default instance;