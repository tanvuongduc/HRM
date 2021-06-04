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

@Controller('teams')
export class TeamController {
    constructor(private readonly teamService: TeamService) { }


    @Post()
    async insertTeam(
        @Body('code') code: String,
        @Body('pic') pic: String,
        @Body('name') name: String,
        @Body('department') department: String,
        @Body('sologan') sologan: String
    ) {
        const res = await this.teamService.insertTeam(code, name, pic, department, sologan);
        return res;
    }

    @Get(':id')
    async getTeamById(
        @Param('id') id: String
    ) {
        const res = await this.teamService.getTeamById(id);
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

    @Get()
    async getAllTeams() {
        const res = await this.teamService.getAllTeams();
        return res;
    }

    @Post(':team/members')
    async insertMembersByTeamId(
        @Body('members') ids: [string],
        @Param('team') teamId: string
    ) {
        const res = this.teamService.insertTeamIdForMembers(ids, teamId);
        return res;
    }


    @Delete(':team/members')
    async removeMembersByTeamId(
        @Body('members') ids: [string],
        @Param('team') teamId: string
    ) {
        const res = this.teamService.removeMembersByTeamId(ids, teamId);
        return res;
    }


    @Get(':team/members')
    async getMembersByTeamId(
        @Param('team') teamId: string
    ) {
        const res = this.teamService.getMembersByTeamId(teamId);
        return res;
    }

}
