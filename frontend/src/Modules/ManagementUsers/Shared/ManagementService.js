import { AuthService } from "../../../Shared";
import { Http } from "../../Exam/Shared";


const API_ENDPOINT = {
    GETLISTUSERS: "users",
    GETUSERINFO: "users/",
    GETLISTTEAMS: "teams",
    GETTEAMID: "teams/",
    UPDATEUSERINFO: "users/",
    POSTNEWUSER: "users",
    GETCERTIFICATES: "certificates"
}

class ManagementService{
    constructor(){
        if(ManagementService._instance) {
            return ManagementService._instance;
        }
        ManagementService._instance = this;
    }

    getListUsers() {
        return Http.get(API_ENDPOINT.GETLISTUSERS);
    }

    getListTeams() {
        return Http.get(API_ENDPOINT.GETLISTTEAMS);
    }

    getTeamId(id) {
        return Http.get(API_ENDPOINT.GETTEAMID + id);
    }

    getUserInfo(id) {
        return Http.get(API_ENDPOINT.GETUSERINFO + id);
    }

    updateUserInfo(id, dataUser) {
        return Http.patch(API_ENDPOINT.UPDATEUSERINFO + id, dataUser);
    }

    postNewUser(dataUser) {
        return Http.post(API_ENDPOINT.POSTNEWUSER, dataUser);
    }

    getCertificates() {
        return Http.get(API_ENDPOINT.GETCERTIFICATES);
    }

}

const instance = new ManagementService;
export default instance;