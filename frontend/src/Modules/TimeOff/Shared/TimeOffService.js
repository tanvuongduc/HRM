import { Http } from "../../Company/Shared";


const API_ENDPOINT = {
    GETLISTTIMEOFF: "timeoff/60cff5e174c34ea254311e8d",
    ADDTIMEOFF: "timeoff"
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