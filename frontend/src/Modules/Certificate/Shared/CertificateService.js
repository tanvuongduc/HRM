import { Http } from "../../../Helper/Http";



const API_ENDPOINT = {
    GET_ALL_CERTIFECATE: "certificates",
    PATCH_CERTIFECATE: "certificates",
    POST_CERTIFECATE: "certificates/update",
};

class CertificateService {
    constructor() {
        if (CertificateService._instance) {
            return CertificateService._instance;
        }
        CertificateService._instance = this;
    }


    async getAllCertifecate() {
        return await Http.get(API_ENDPOINT.GET_ALL_CERTIFECATE);
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

const instance = new CertificateService();

export default instance;