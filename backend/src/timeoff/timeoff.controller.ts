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
        @Body('reason', isStringRequired) reason: string,
        @Body('from', isDateRequired) from: Date,
        @Body('to', isDateRequired) to: Date,
        @Body('by', isStringRequired) by: string,
        @Body('pic', isStringRequired) pic: string,
    ) {
        return this.timeoffService.insertTimeoff(reason, from, to, by, pic);
    }

    @Get()
    async getAllTimeoffInMonth() {
        return this.timeoffService.getAllTimeoffInMonth()
    }

    @Get(':id')
    async getAllTimeoffInMonthOfUserId(
        @Param('id', isStringRequired) id: string
    ) {
        return this.timeoffService.getAllTimeoffInMonthOfUserId(id)
    }

    @Patch(':id')
    async handleTimeoff(
        @Param('id', isStringRequired) id: string,
        @Body('status', timeoffStatusValidate) status: TimeoffStatus
    ) {
        return this.timeoffService.handleTimeoff(id, status)
    }

}
