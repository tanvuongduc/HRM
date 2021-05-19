
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarrerService } from './carrer.service';

@Controller('carrer')
export class CarrerController {
    constructor(private readonly carrerService: CarrerService) { }
    @Post()
    async addCarrer(
        @Body('description') description: String,
        @Body('achievements') achievements: String,
        @Body('salary') salary: Number,
        @Body('stage') stage:Date
    ) {
        const carrer = await this.carrerService.insertCarrer(
            description,
            achievements,
            salary,
            stage
        )
        return {id:carrer}
    }

    @Get()
    async getAll() {
        return await this.carrerService.getAllCarrer()
    }

    @Get(':id')
    async getSingleCarrer(
        @Param('id') id:String
    ) {
        return this.carrerService.getSingleCarrer(id)
    }

    @Put(':id')
    async updateCarrer(
          @Param('id') id: string,
        @Body('description') description: string,
        @Body('achievements') achievements: string,
        @Body('salary') salary: Number,
        @Body('stage') stage: Date,

    ) {
        const data = await this.carrerService.updateCarrer(id, description, achievements, salary, stage)
        return {success:true, data}
    }

    @Delete(':id')
    async deleteCarrer(@Param('id') id: String) {
        await this.carrerService.deleteCarrer(id)
        return {success:true}
    }
}
