import { Injectable, HttpException, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department } from './department.model';
import { TeamService } from '../team/team.service';
import { UsersService } from '../user/user.service'


@Injectable()
export class DepartmentService {

    constructor(
        @InjectModel('Department') private readonly departmentModel: Model<Department>,
        @Inject(forwardRef(() => TeamService))private readonly teamService: TeamService,
        @Inject(forwardRef(() => UsersService))private readonly usersService: UsersService

    ) {

    }

    async insertDepartment(
        code: String,
        name: String,
        pic: String,
        desc: String,
    ) {
        if (!code) {
            throw new HttpException('Code must be not null!', 400);
        }
        if (!name) {
            throw new HttpException('Code must be not null!', 400);
        }
        await this.usersService.findUserById(pic)
        const checkCode = await this.departmentModel.find().where({ code: code }).exec();
        if (checkCode.length) {
            throw new HttpException('Code exsited!', 409);
        }

        const newDepartment = new this.departmentModel({
            code, name, pic, desc
        });
        const res = await newDepartment.save();
        return {
            id: res.id
        }

    }

    async getDepartmentById(
        id: String
    ) {
        const department = await this.findDepartmentById(id);

        return {
            id: department.id,
            code: department.code,
            name: department.name,
            pic: department.pic,
            desc: department.desc,
            createAt: department.createdAt,
            documents: department.documents
        }
    }

    async getAllDepartments(

    ) {
        const departments = await this.departmentModel.find().populate('pic').exec();
        return departments.map(department => ({
            id: department.id,
            name: department.name,
            code: department.code,
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

    async insertTeamsByDepartmentId(
        teamsId: [String],
        departmentId: String
    ) {
        await this.findDepartmentById(departmentId);
        const res = await this.teamService.insertDepartmentForTeamsId(teamsId, departmentId)
        return {
            departmentId: departmentId,
            teamsId: res
        }
    }

    async removeTeamsByDepartmentId(
        teamsId: [String],
        departmentId: String
    ) {
        await this.findDepartmentById(departmentId);
        const res = await this.teamService.removeDepartmentFromTeamsId(teamsId, departmentId)
        return {
            departmentId: departmentId,
            teamsId: res
        }
    }
    async updateDepartmentById(
        id: String,
        code: String,
        name: String,
        pic: String,
        desc: String,
        documents: [String]
    ) {
        await this.usersService.findUserById(pic)
        let department = await this.findDepartmentById(id);
        department.code = code;
        department.name = name;
        department.pic = pic;
        department.desc = desc;
        department.documents = documents;
        const res = await department.save();
        return {
            id: res.id
        }
    }


    async findDepartmentById(id: String): Promise<Department> {
        let department: any;
        try {
            department = await this.departmentModel.findById(id).populate('pic').populate('documents').exec();
        } catch (error) {
            throw new HttpException('Could not find department.', 400);
        }
        if (!department) {
            throw new HttpException(`find department err ${id}`, 400);
        }
        return department;
    }


}
