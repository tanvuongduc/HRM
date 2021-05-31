import { Http } from "../../../Helper/Http";
import { UtilService } from "./";



const API_ENDPOINT = {
    BASE: "/certificates",
};

class Org extends UtilService {
    constructor() {
        if (Org._instance) {
            return Org._instance;
        }
        Org._instance = this;
    }


    async getAllCertifecate() {
        const url = `${API_ENDPOINT.BASE}`;
        return (await Http.get(url)).data;
    }

}

const instance = new Org();

export default instance;