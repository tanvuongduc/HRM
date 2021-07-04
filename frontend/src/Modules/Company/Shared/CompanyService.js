import { Http } from "../../../Helper/Http";
import { UtilService } from ".";

const API_ENDPOINT = {
	BASE: "company",
	BASE_DEPARTMENTS: "departments",
	BASE_TEAMS: "teams",
	BASE_PEOPLE: "users"
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

	async patchCompanyByLocation(companyResult) {
		const url = `${API_ENDPOINT.BASE}`;
		return await Http.patch(url, { "domain": companyResult });
	};

	async finishNoteResult(noteResult) {
		return await Http.patch(`${API_ENDPOINT.BASE}`, { "notes": noteResult })
	};

	async finishDocumentResult(documentResult) {
		return await Http.patch(`${API_ENDPOINT.BASE}`, { "documents": documentResult })
	};
}

const instance = new Exam();
export default instance;
