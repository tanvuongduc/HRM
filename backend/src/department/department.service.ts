import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department } from './department.model';
import { TeamService } from '../team/team.service'

@Injectable()
export class DepartmentService {

    constructor(
        @InjectModel('Department') private readonly departmentModel: Model<Department>,
        private readonly teamService: TeamService
    ) {

    }

    async insertDepartment(
        name: String,
        pic: String,
        desc: String,
    ) {
        const size = await this.departmentModel.estimatedDocumentCount().exec();
        const id = size+1;
        const newDepartment = new this.departmentModel({
            id, name, pic, desc
        });
        const res = await newDepartment.save();
        return {
            id: res.id
        }
    }

    async getDepartmentById(
        id: Number
    ) {
        const department = await this.findDepartmentById(id);

        return {
            id: department.id,
            name: department.name,
            pic: department.pic,
            desc: department.desc,
            createAt: department.createdAt
        }
    }

    async getAllDepartments(

    ) {
        const departments = await this.departmentModel.find().populate('pic').exec();
        return departments.map(department => ({
            id: department.id,
            name: department.name,
            pic: department.pic,
            desc: department.desc,
            createAt: department.createdAt

        }))
    }

    async getTeamsByDepartmentId(
        id: String
    ) {
        return this.teamService.getTeamsByDepartmentId(id);
    }

    async updateDepartmentById(
        id: Number,
        name: String,
        pic: String,
        desc: String,
    ) {
        let department = await this.findDepartmentById(id);
        department.name = name;
        department.pic = pic;
        department.desc = desc;
        const res = await department.save();
        return {
            id: res.id
        }
    }


    async findDepartmentById(id: Number): Promise<Department> {
        let department: any;
        try {
            department = await this.departmentModel.findById(id).populate('pic').exec();
        } catch (error) {
            throw new NotFoundException('Could not find department.');
        }
        if (!department) {
            throw new NotFoundException(`find department err ${id}`);
        }
        return department;
    }


}
