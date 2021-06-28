import { Http } from "../../Company/Shared";


const userId = JSON.parse(localStorage.getItem("userId"));

const API_ENDPOINT = {
    GETLISTTIMEOFF: `timeoff/${userId}`,
    ADDTIMEOFF: "timeoff/"
}


class TimeOffService {
    constructor() {
        if(TimeOffService._instance) {
            return TimeOffService._instance;
        }
        TimeOffService._instance = this;
    }

    async getListTimeOff() {
        return await Http.get(API_ENDPOINT.GETLISTTIMEOFF);
    }

    async addTimeOff(data) {
        return await Http.post(API_ENDPOINT.ADDTIMEOFF, data);
    }
}

const instance = new TimeOffService;
export default instance;