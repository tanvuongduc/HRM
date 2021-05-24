import { Http } from "../../../Helper/Http";
import { UtilService } from ".";

const examResult = {
  examID: "1",
  examList: [
    {
      title: "Glucose",
      unit: "mMol/l",
      normalValue: "5-10",
      resultValue: "8",
    },
    {
      title: "Cholesterone",
      unit: "mMol/l",
      normalValue: "5-10",
      resultValue: "8",
    },
  ],
};

const API_ENDPOINT = {
  BASE: "/job",
  GET_CUS_BY_LOC: "/step/list",
  GET_EXAM_BY_LOC: "/location/service/list",
  GET_EXAM_INDEX_LIST_BY_SER_ID: "/service/step/get_byServiceId",
  UPDATE_EXAM_RESULT: "/step/finish",
};

class Exam extends UtilService {
  constructor() {
    super();
    if (Exam._instance) {
      return Exam._instance;
    }
    Exam._instance = this;
  }

  userList = [];
  selectedUser = -1;

  async getCustomerByLocation(location_id) {
    const url = `${API_ENDPOINT.BASE}${API_ENDPOINT.GET_CUS_BY_LOC}`;
    return (await Http.get(url, location_id)).data;
  }

  async getExamByLocation(location_id) {
    const url = `${API_ENDPOINT.GET_EXAM_BY_LOC}`;
    return (await Http.get(url, location_id)).data;
  }

  async getExamIndexListByServiceID(service_id) {
    const url = `${API_ENDPOINT.GET_EXAM_INDEX_LIST_BY_SER_ID}`;
    return (await Http.get(url, service_id)).data;
  }

  finishExamResult(examResult) {
    console.log(examResult);
    return Http.post(
      `${API_ENDPOINT.BASE}${API_ENDPOINT.UPDATE_EXAM_RESULT}`,
      examResult
    );
  }
}

const instance = new Exam();
export default instance;
