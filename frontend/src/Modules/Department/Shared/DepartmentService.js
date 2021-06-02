import { Http } from "../../../Helper/Http";

const API_ENDPOINT = {
    LIST_DEPARTMENT :'departments',
    GET_DEPARTMENT :'departments/department?id=',
    POST_DEPARTMENT :'departments/department',
    UPDATE_DEPARTMENT :'departments/department?id=',
    LIST_USER :'users',
    DELETE_DEPARTMENT:'',
}

class DepartmentService {
    constructor() {
      if (DepartmentService._instance) {
        return DepartmentService._instance;
      }
      DepartmentService._instance = this;
    }
    

    deleteDepartment() {
      return Http.delete(API_ENDPOINT.DELETE_DEPARTMENT)
    }
    listDepartment() {
        return Http.get(API_ENDPOINT.LIST_DEPARTMENT)
    }
    postDepartment(payload) {
        return Http.post(API_ENDPOINT.POST_DEPARTMENT,payload)
      }
    getDepartmentById(id) {
        return Http.get(API_ENDPOINT.GET_DEPARTMENT+id )
      }
    editDepartment(id,payload) {
        return Http.post(API_ENDPOINT.UPDATE_DEPARTMENT+id, payload)
    }
    listUser() {
        return Http.get(API_ENDPOINT.LIST_USER)
    }

     

}

const instance = new DepartmentService();

export default instance;
