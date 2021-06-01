import axios from "axios";
import Axios from "axios";
import { BASE_URL } from "../Constances/const";

export class Http {
	constructor() { }

	static _getHeader() {
		return {
			Authorization: `Bearer ${window.localStorage.getItem("token") || ""}`,
			"Access-Control-Allow-Origin": "*"
		};
	}

	static get = async (endPoint, params) => {
		const options = {
			headers: this._getHeader(),
		};
		if (params && Object.keys(params).length) {
			options.params = params;
		}
		const res = await Axios.get(BASE_URL + endPoint, options);
		return res;
	};

	static post = (endPoint, payload) => {
		return Axios.post(BASE_URL + endPoint, payload, {
			headers: this._getHeader(),
		});
	};

	static put = (endPoint, payload) => {
		return Axios.put(BASE_URL + endPoint, payload, {
			headers: this._getHeader(),
		});
	};

	static patch = (endPoint, payload) => {
		return Axios.patch(BASE_URL + endPoint, payload, {
			headers: this._getHeader(),
		});
	};


	static delete = (endPoint, payload) => {
		return Axios.delete(BASE_URL + endPoint, payload, {
			headers: this._getHeader(),
			data: payload
		});
	};
	static deleteData = (endPoint, payload) => {
		return Axios.delete(BASE_URL + endPoint, {
			headers: this._getHeader(),
			data: payload
		});
	};

	static upload(file, title, desc) {
		const formData = new FormData();
		formData.append('file', file)
		formData.append('title', title)
		formData.append('desc', desc)
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}
		return Axios.post(BASE_URL + "upload", formData, config)
	}
}
