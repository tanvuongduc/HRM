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

    @Post('department')
    async insertDepartment(
        @Body('name') name: String,
        @Body('pic') pic: String,
        @Body('desc') desc: String,
    ) {
        const res = await this.departmentService.insertDepartment(name, pic, desc);
        return res;
    }


    @Get('department')
    async getDepartmentById(
        @Query('id') id: Number
    ) {
        const res = await this.departmentService.getDepartmentById(id);
        return res;
    }

    @Patch('department')
    async updateDepartmentById(
        @Query('id') id: Number,
        @Body('name') name: String,
        @Body('pic') pic: String,
        @Body('desc') desc: String,
        @Body('documents') documents: [String]
    ) {
        const res = await this.departmentService.updateDepartmentById(id, name, pic, desc, documents);
        return res;
    }




    @Get()
    async getAllDepartments(
    ) {
        const res = await this.departmentService.getAllDepartments();
        return res;
    }

    @Get('teams')
    async getTeamsByDepartmentId(
        @Query('department') id: String
    ) {
        const res = await this.departmentService.getTeamsByDepartmentId(id);
        return res;
    }

    @Patch('teams')
    async insertTeamsByDepartmentId(
        @Query('department') id: Number,
        @Body('teamsId') teamsId: [String]
    ) {
        const res = await this.departmentService.insertTeamsByDepartmentId(teamsId, id);
        return res;
    }
    @Delete('teams')
    async removeTeamsByDepartmentId(
        @Query('department') id: Number,
        @Body('teamsId') teamsId: [String]
    ) {
        const res = await this.departmentService.removeTeamsByDepartmentId(teamsId, id);
        return res;
    }
}
