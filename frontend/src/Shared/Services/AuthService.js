import { UtilService } from "../";
import { Http } from "../../Helper/Http";

const API_ENDPOINT = {
    LOGIN: "login",
    ME: "me",
};

class AuthService extends UtilService {
    constructor() {
        super();
        if (AuthService._instance) {
            return AuthService._instance;
        }
        AuthService._instance = this;
    }

    userInfo = JSON.parse(window.localStorage.getItem('userId') || 'null');

    async login(username, password) {
        return (await Http.post(API_ENDPOINT.LOGIN, { username, password })).data;
    }

    async getUserInfo() {
        return (await Http.get(API_ENDPOINT.ME)).data;
    }


    hasRole(role) {
        if (!role || !this.userInfo) return;
        return this.userInfo.role === role;
    }

}

const instance = new AuthService();

export default instance;
