import {
    Controller,
    Post,
    Delete,
    Body,
    Get,
    Query,
} from '@nestjs/common';

import { TeamService } from './team.service';

@Controller('teams')
export class TeamController {
    constructor(private readonly teamService: TeamService) { }

    
    @Post()
    async insertTeam(
        @Body('pic') leader: String,
        @Body('name') name: String,
        @Body('department') department: String,
        @Body('sologan') sologan: String
    ) {
        const res = await this.teamService.insertTeam(name, leader, department, sologan);
        return res;
    }


    @Post('add/members')
    async insertMembersByTeamId(
        @Body('members') ids: [string],
        @Query('team') teamId: string
    ) {
        const res = this.teamService.insertTeamIdForMembers(ids, teamId);
        return res;
    }


    @Delete('remove/members')
    async removeMembersByTeamId(
        @Body('members') ids: [string],
        @Query('team') teamId: string
    ) {
        const res = this.teamService.removeMembersByTeamId(ids, teamId);
        return res;
    }


    @Get('get/members')
    async getMembersByTeamId(
        @Query('team') teamId: string
    ) {
        const res = this.teamService.getMembersByTeamId(teamId);
        return res;
    }


    @Get('team')
    async getSingleTeamById(@Query('id') id: String) {
        const res = await this.teamService.getSingleTeamById(id);
        return res;
    }


    @Get()
    async getAllTeams() {
        const res = await this.teamService.getAllTeams();
        return res;
    }

}
