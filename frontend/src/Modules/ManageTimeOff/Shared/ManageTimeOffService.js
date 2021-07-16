
import { Component } from "react";
import { AuthService } from "../../../Shared";
import { Http } from "../../Exam/Shared";

const API_ENDPOINT = {
    GET_ALL_REQUEST: "timeoff",
    UPDATE_REQUEST: "timeoff/"
}



class ManageTimeOffService {
    constructor(){
        if(ManageTimeOffService._instance) {
            return ManageTimeOffService._instance;
        }
        ManageTimeOffService._instance = this;
    }

    getAllRequest() {
         return Http.get(API_ENDPOINT.GET_ALL_REQUEST);
    }

    updateRequest(timeoff_id, data) {
        return Http.patch(API_ENDPOINT.UPDATE_REQUEST + timeoff_id, data );
    }
}



const instance = new ManageTimeOffService;
export default instance;