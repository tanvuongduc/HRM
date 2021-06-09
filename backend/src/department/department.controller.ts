import { isStringRequired, isArrayString } from './../validator/joi.validate';
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
        @Body('code', isStringRequired) code: string,
        @Body('name', isStringRequired) name: string,
        @Body('pic', isStringRequired) pic: string,
        @Body('desc', isStringRequired) desc: string,
    ) {
        const res = await this.departmentService.insertDepartment(code, name, pic, desc);
        return res;
    }


    @Get(':id')
    async getDepartmentById(
        @Param('id', isStringRequired) id: string
    ) {
        const res = await this.departmentService.getDepartmentById(id);
        return res;
    }

    @Patch(':id')
    async updateDepartmentById(
        @Param('id', isStringRequired) id: string,
        @Body('code', isStringRequired) code: string,
        @Body('name', isStringRequired) name: string,
        @Body('pic', isStringRequired) pic: string,
        @Body('desc', isStringRequired) desc: string,
        @Body('documents', isArrayString) documents: string[]
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
        @Param('id', isStringRequired) id: string
    ) {
        const res = await this.departmentService.getTeamsByDepartmentId(id);
        return res;
    }

    @Patch(':id/teams')
    async insertTeamsByDepartmentId(
        @Param('id', isStringRequired) id: string,
        @Body('teamsId', isStringRequired) teamsId: string[]
    ) {
        const res = await this.departmentService.insertTeamsByDepartmentId(teamsId, id);
        return res;
    }


    @Delete(':id/teams')
    async removeTeamsByDepartmentId(
        @Param('id', isStringRequired) id: string,
        @Body('teamsId', isStringRequired) teamsId: string[]
    ) {
        const res = await this.departmentService.removeTeamsByDepartmentId(teamsId, id);
        return res;
    }
}
