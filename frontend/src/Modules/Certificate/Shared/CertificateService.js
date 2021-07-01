import { Http } from "../../../Helper/Http";



const API_ENDPOINT = {
    GET_ALL_CERTIFECATE: "certificates",
    GET_ONE_CERTIFECATE: "certificates/",
    POST_CERTIFECATE: "certificates",
    PATCH_CERTIFECATE: "certificates/",
};

class Certifecate {
    constructor() {
        if (Certifecate._instance) {
            return Certifecate._instance;
        }
        Certifecate._instance = this;
    }


    async getAllCertifecate() {
        return await Http.get(API_ENDPOINT.GET_ALL_CERTIFECATE);
    }
    async getCertifecateById(id) {
        const url = `${API_ENDPOINT.GET_ONE_CERTIFECATE}` + id;
        return await Http.get(url);
    }
    async postCertifecate(payload) {
        const url = `${API_ENDPOINT.POST_CERTIFECATE}`;
        return (await Http.post(url, payload));
    }
    async patchCertifecate(id, payload) {
        const url = `${API_ENDPOINT.PATCH_CERTIFECATE + id}`;
        return (await Http.patch(url, payload));
    }

}

const instance = new Certifecate();

export default instance;