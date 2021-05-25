import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) { }
    @Post()
    async addDepartment(
        @Body('name') name: string,
        @Body('code') code: string,
        @Body('description') description: string,

    ) {
        const department = await this.departmentService.insertDepartment(
            name,
            code,
            description,
        )
        return { id: department }
    }
    @Get()
    async getAll() {
        return await this.departmentService.getAllDepartment()
    }
    @Get(':id')
    async getSingleDepartment(
        @Param('id') id: string
    ) {
        return this.departmentService.getSingleDepartment(id)
    }
    @Put(':id')
    async updateDepartment(
        @Param('id') id: string,
        @Body('name') name: string,
        @Body('code') code: string,
        @Body('description') description: string,
    ) {
        const data = await this.departmentService.updateDepartment(id, name, code, description)
        return {success: true}
    }
    @Delete(':id')
    async deleteDepartment(@Param('id') id: string) {
        await this.departmentService.deleteDepartment(id)
        return {success: true}
    }
}
