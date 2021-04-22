import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Department } from './department.model';

@Injectable()
export class DepartmentService {
    constructor(@InjectModel('Department') private readonly departmentModel: Model<Department>) { }
    //insert
    async insertDepartment(
        name: string,
        code: string,
        description: string
    ) {
        const newDepartment = new this.departmentModel({
            name,
            code,
            description
        })
        const result = await newDepartment.save()
        return result.id as string;
    }
    //get all
    async getAllDepartment() {
        const department = await this.departmentModel.find()
        return department
    }

    //get single
    async getSingleDepartment(id: string) {
        const department = await this.departmentModel.findById(id).exec()
        return {
            id: department.id,
            name: department.name,
            code: department.code,
            description: department.description
        }
    }
    //update
    async updateDepartment(
        id: string,
        name: string,
        code: string,
        description: string
    ) {
        const data = await this.departmentModel.findById(id).exec()
        if (name) {
            data.name = name
        }
        if (code) {
            data.code = code
        }
        if (description) {
            data.description = description
        }
        data.save()
    }
    // delete
    async deleteDepartment(id: string) {
        const data = await this.departmentModel.deleteOne({_id : id}).exec()
        if(data.n ===0) {
            throw new NotFoundException('cloud not find Department')
        }

    }
}
