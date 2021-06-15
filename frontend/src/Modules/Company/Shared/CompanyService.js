import { Http } from "../../../Helper/Http";
import { UtilService } from ".";

const API_ENDPOINT = {
	BASE: "company",
	BASE_DEPARTMENTS: "departments",
	BASE_TEAMS: "teams",
	BASE_PEOPLE: "users",
	// GET_CUS_BY_LOC: "/step/list",
	// GET_EXAM_BY_LOC: "/location/service/list",
	// GET_EXAM_INDEX_LIST_BY_SER_ID: "/service/step/get_byServiceId",
	// UPDATE_EXAM_RESULT: "/step/finish",
};

class Exam extends UtilService {

	async countDepartmets(location_id) {
		const url = `${API_ENDPOINT.BASE_DEPARTMENTS}`;
		return await Http.get(url, location_id);
	};

	async countTeams(location_id) {
		const url = `${API_ENDPOINT.BASE_TEAMS}`;
		return await Http.get(url, location_id);
	};

	async countPeoples(location_id) {
		const url = `${API_ENDPOINT.BASE_PEOPLE}`;
		return await Http.get(url, location_id);
	};

	async getCompanyByLocation(location_id) {
		const url = `${API_ENDPOINT.BASE}`;
		return await Http.get(url, location_id);
	};

	async finishNoteResult(noteResult, documentResult, companyResult) {
		return await Http.patch(`${API_ENDPOINT.BASE}`,
			{
				"id": companyResult.id,
				"name": companyResult.name,
				"domain": companyResult.domain,
				"address": companyResult.address,
				"website": companyResult.website,
				"email": companyResult.email,
				"phone": companyResult.phone,
				"pic": companyResult.pic._id,
				"overviews": companyResult.overviews,
				"notes": noteResult,
				"documents": documentResult
			}
		)
	};

	async finishDocumentResult(documentResult, companyResult) {
		return await Http.patch(`${API_ENDPOINT.BASE}`,
			{
				"id": companyResult.id,
				"name": companyResult.name,
				"domain": companyResult.domain,
				"address": companyResult.address,
				"website": companyResult.website,
				"email": companyResult.email,
				"phone": companyResult.phone,
				"pic": companyResult.pic._id,
				"overviews": companyResult.overviews,
				"notes": companyResult.notes,
				"documents": documentResult
			}
		)
	};
}

const instance = new Exam();
export default instance;
