import { Http } from "../../../Helper/Http";

const API_ENDPOINT = {
    LIST_DEPARTMENT :'/departments',
    GET_DEPARTMENT :'/departments/department?id=',
    POST_DEPARTMENT :'/departments/department',
    UPDATE_DEPARTMENT :'/departments/department?id=',
    LIST_USER :'/users',
}

class Department {
    constructor() {
      if (Department._instance) {
        return Department._instance;
      }
      Department._instance = this;
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

const instance = new Department();

export default instance;
