import { Http } from "../../../Helper/Http";
import { UtilService } from "./";





class OverviewService {
  constructor() {
    if (OverviewService._instance) {
      return OverviewService._instance;
    }
    OverviewService._instance = this;
  }


  async getCarrer() {
    const url = `users/60c711a52ff85804f8d90961`;
    return await Http.get(url);
  }
}

const instance = new OverviewService();

export default instance;
