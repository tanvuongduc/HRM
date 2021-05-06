import {
    Controller,
    Post,
    Body,
    Get,
    Query,
} from '@nestjs/common';

import { TeamService } from './team.service';
import { Employee } from './team.model';

@Controller('teams')
export class TeamController {
    constructor(private readonly teamService: TeamService) { }

    @Post()
    async insertTeam(
        @Body('name') name: String,
        @Body('member') member: Employee,
        @Body('department') department: String,
        @Body('sologan') sologan: String
    ) {
        const res = await this.teamService.insertTeam(name, member, department, sologan);
        return res;
    }
    @Get('department')
    async getDepartmentTeam(@Query('dpm')department: String){
        const res = await this.teamService.getDepartmentTeam(department);
        return res;
    }
    @Get('team')
    async getSingleTeam(@Query('id')id: String){
        const res = await this.teamService.getSingleTeam(id);
        return res;
    }
    @Get()
    async getTeams(){
        const res = await this.teamService.getTeams();
        return res;
    }

}
