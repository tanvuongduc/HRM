import {
    Controller,
    Post,
    Delete,
    Body,
    Get,
    Query,
    Param,
} from '@nestjs/common';

import { TeamService } from './team.service';

@Controller('team')
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

    @Get(':id')
    async getTeamById(
        @Param('id') id: String
    ) {
        const res = await this.teamService.getTeamById(id);
        return res;
    }


    @Get()
    async getAllTeams() {
        const res = await this.teamService.getAllTeams();
        return res;
    }

    @Post('members/:team')
    async insertMembersByTeamId(
        @Body('members') ids: [string],
        @Param('team') teamId: string
    ) {
        const res = this.teamService.insertTeamIdForMembers(ids, teamId);
        return res;
    }


    @Delete('members/:team')
    async removeMembersByTeamId(
        @Body('members') ids: [string],
        @Param('team') teamId: string
    ) {
        const res = this.teamService.removeMembersByTeamId(ids, teamId);
        return res;
    }


    @Get('members/:team')
    async getMembersByTeamId(
        @Param('team') teamId: string
    ) {
        const res = this.teamService.getMembersByTeamId(teamId);
        return res;
    }

}
