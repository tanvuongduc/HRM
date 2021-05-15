import { Http } from '../../../Helper/Http';

const API_ENDPOINT = {
  //////// ORG/USER ////////////////
  GETBASICINFOTEAM: 'teams/team?id=',
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
  
}
const instance = new TeamService();

export default instance;