import { Http } from "../../Exam/Shared";


const API_ENDPOINT = {
    GETMYINFO: "users/"
}

class UserService{
    constructor(){
        if(UserService._instance) {
            return UserService._instance;
        }
        UserService._instance = this;
    }

    async getMyInfo(userId) {
        return await Http.get(API_ENDPOINT.GETMYINFO + userId);
    }

}

const instance = new UserService;
export default instance;