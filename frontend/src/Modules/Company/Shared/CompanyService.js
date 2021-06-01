import { Http } from "../../../Helper/Http";
import { UtilService } from ".";

// const examResult = {
// 	examID: "1",
// 	examList: [
// 		{
// 			title: "Glucose",
// 			unit: "mMol/l",
// 			normalValue: "5-10",
// 			resultValue: "8",
// 		},
// 		{
// 			title: "Cholesterone",
// 			unit: "mMol/l",
// 			normalValue: "5-10",
// 			resultValue: "8",
// 		},
// 	],
// };

const API_ENDPOINT = {
	BASE: "company",
	BASE_DOCUMENT: "company",
	// GET_CUS_BY_LOC: "/step/list",
	// GET_EXAM_BY_LOC: "/location/service/list",
	// GET_EXAM_INDEX_LIST_BY_SER_ID: "/service/step/get_byServiceId",
	// UPDATE_EXAM_RESULT: "/step/finish",
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

	async getCompanyByLocation(location_id) {
		const url = `${API_ENDPOINT.BASE}`;
		return (await Http.get(url, location_id));
	}

	// async getCompanyByLocation(location_id) {
	// 	const url = `${API_ENDPOINT.GET_EXAM_BY_LOC}`;
	// 	return (await Http.get(url, location_id)).data;
	// }

	// async getCompanyIndexListByServiceID(service_id) {
	// 	const url = `${API_ENDPOINT.GET_EXAM_INDEX_LIST_BY_SER_ID}`;
	// 	return (await Http.get(url, service_id)).data;
	// }

	finishNoteResult(noteResult, companyResult) {
		return Http.patch(
			`${API_ENDPOINT.BASE}`,
			{
				"id": companyResult.id,
				"name": companyResult.name,
				"domain": companyResult.domain,
				"address": companyResult.address,
				"email": companyResult.email,
				"phone": companyResult.phone,
				"pic": "60a8c904674c16155830c7f1",
				"overviews": companyResult.overviews,
				"notes": noteResult,
				"documents": companyResult.documents
			}
		);
	}

}

const instance = new Exam();
export default instance;
