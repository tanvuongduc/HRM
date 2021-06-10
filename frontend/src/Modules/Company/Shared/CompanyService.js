import { Http } from "../../../Helper/Http";
import { UtilService } from ".";

const API_ENDPOINT = {
	BASE: "company",
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

	async getCompanyByLocation(location_id) {
		const url = `${API_ENDPOINT.BASE}`;
		return await Http.get(url, location_id);
	};

	async finishNoteResult(noteResult, companyResult) {
		return await Http.patch(`${API_ENDPOINT.BASE}`,
			{
				"id": companyResult.id,
				"name": companyResult.name,
				"domain": companyResult.domain,
				"website": companyResult.website,
				"address": companyResult.address,
				"email": companyResult.email,
				"phone": companyResult.phone,
				"pic": companyResult.pic,
				"overviews": companyResult.overviews,
				"notes": noteResult,
				"documents": companyResult.documents
			}
		)
	};

	async finishDocumentResult(documentResult, companyResult) {
		return await Http.patch(`${API_ENDPOINT.BASE}`,
			{
				"id": companyResult.id,
				"name": companyResult.name,
				"domain": companyResult.domain,
				"website": companyResult.website,
				"address": companyResult.address,
				"email": companyResult.email,
				"phone": companyResult.phone,
				"pic": companyResult.pic,
				"overviews": companyResult.overviews,
				"notes": companyResult.notes,
				"documents": documentResult
			}
		)
	};
}

const instance = new Exam();
export default instance;
