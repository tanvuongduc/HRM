import { isDateRequired } from './../validator/joi.validate';
import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { TimeoffService } from './timeoff.service';
import { timeoffStatusValidate } from './timeoff.validate';
import { isStringRequired } from '../validator/joi.validate';
import { TimeoffStatus } from './timeoff.model';

@Controller('timeoff')
export class TimeoffController {
    constructor(private readonly timeoffService: TimeoffService) { }

    @Post()
    async insertTimeoff(
        @Body('reason', isStringRequired) reason: String,
        @Body('from', isDateRequired) from: Date,
        @Body('to', isDateRequired) to: Date,
        @Body('by', isStringRequired) by: String,
    ) {
        return this.timeoffService.insertTimeoff(reason, from, to, by);
    }

    @Get()
    async getAllTimeoffInMonth() {
        return this.timeoffService.getAllTimeoffInMonth()
    }

    @Patch(':id')
    async handleTimeoff(
        @Param('id', isStringRequired) id: String,
        @Body('status', timeoffStatusValidate) status: TimeoffStatus
    ) {
        return this.timeoffService.handleTimeoff(id, status)
    }

}
