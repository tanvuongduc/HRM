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
    const url = `users/60ba33fa1f194c0c78c99337`;
    return await Http.get(url);
  }
}

const instance = new OverviewService();

export default instance;
