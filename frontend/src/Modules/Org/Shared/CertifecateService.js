import { Http } from "../../../Helper/Http";



const API_ENDPOINT = {
    GET_ALL_CERTIFECATE: "/certificates",
    PATCH_CERTIFECATE: "/certificates",
    POST_CERTIFECATE: "/certificates/update",
};

class Certifecate {
    constructor() {
        if (Certifecate._instance) {
            return Certifecate._instance;
        }
        Certifecate._instance = this;
    }


    getAllCertifecate() {
        return Http.get('certificates');
    }
    async postCertifecate(payload) {
        const url = `${API_ENDPOINT.POST_CERTIFECATE}`;
        return (await Http.post(url, payload)).data;
    }
    async patchCertifecate(payload, id) {
        const url = `${API_ENDPOINT.PATCH_CERTIFECATE + id}`;
        return (await Http.patch(url, payload)).data;
    }

}

const instance = new Certifecate();

export default instance;