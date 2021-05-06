import { Controller, Post, Body, Get, Query, } from '@nestjs/common';
import {TimeoffService} from './timeoff.service'
import {
    
} from '@nestjs/common';
@Controller('timeoff')
export class TimeoffController {
    constructor(private readonly timeoffService: TimeoffService) { }

    @Post()
    async createTimeoff(
        @Body('reason')reason: String,
        @Body('from')from: Date,
        @Body('to')to: Date,
        @Body('by')by: String,
        @Body('status')status: String,
    ){
        return this.timeoffService.insertTimeoff(reason,  from, to, by, status)
    }

    @Get()
    async getAllTimeoffInMonth(){
        return this.timeoffService.getAllTimeoffInMonth()
    }
}
