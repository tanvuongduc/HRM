import { Param } from '@nestjs/common';
import {
    Patch,
    Controller,
    Post,
    Delete,
    Body,
    Get,
    Query
} from '@nestjs/common';

import { DepartmentService } from './department.service'

@Controller('departments')
export class DepartmentController {

    constructor(private readonly departmentService: DepartmentService) { }

    @Post()
    async insertDepartment(
        @Body('code') code: String,
        @Body('name') name: String,
        @Body('pic') pic: String,
        @Body('desc') desc: String,
    ) {
        const res = await this.departmentService.insertDepartment(code, name, pic, desc);
        return res;
    }


    @Get(':id')
    async getDepartmentById(
        @Param('id') id: String
    ) {
        const res = await this.departmentService.getDepartmentById(id);
        return res;
    }

    @Patch(':id')
    async updateDepartmentById(
        @Param('id') id: String,
        @Body('code') code: String,
        @Body('name') name: String,
        @Body('pic') pic: String,
        @Body('desc') desc: String,
        @Body('documents') documents: [String]
    ) {
        const res = await this.departmentService.updateDepartmentById(id, code, name, pic, desc, documents);
        return res;
    }




    @Get()
    async getAllDepartments(
    ) {
        const res = await this.departmentService.getAllDepartments();
        return res;
    }

    @Get(':id/teams')
    async getTeamsByDepartmentId(
        @Param('id') id: String
    ) {
        console.log(id)
        const res = await this.departmentService.getTeamsByDepartmentId(id);
        return res;
    }

    @Patch(':id/teams')
    async insertTeamsByDepartmentId(
        @Param('id') id: String,
        @Body('teamsId') teamsId: [String]
    ) {
        const res = await this.departmentService.insertTeamsByDepartmentId(teamsId, id);
        return res;
    }


    @Delete(':id/teams')
    async removeTeamsByDepartmentId(
        @Param('id') id: String,
        @Body('teamsId') teamsId: [String]
    ) {
        const res = await this.departmentService.removeTeamsByDepartmentId(teamsId, id);
        return res;
    }
}
