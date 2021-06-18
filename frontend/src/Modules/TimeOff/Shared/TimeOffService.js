import { Http } from "../../Company/Shared";


const API_ENDPOINT = {
    GETLISTTIMEOFF: "timeoff/609ca06b8d576b2184936f7d"
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