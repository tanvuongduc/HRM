import { Http } from "../../Company/Shared";


const API_ENDPOINT = {
    GETLISTTIMEOFF: "timeoff"
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
}

const instance = new TimeOffService;
export default instance;