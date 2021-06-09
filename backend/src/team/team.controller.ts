import { isStringRequired, isArrayStringRequired, isString } from './../validator/joi.validate';
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
        @Body('code', isStringRequired) code: string,
        @Body('pic', isStringRequired) pic: string,
        @Body('name', isStringRequired) name: string,
        @Body('department', isStringRequired) department: string,
        @Body('sologan', isString) sologan: string
    ) {
        const res = await this.teamService.insertTeam(code, name, pic, department, sologan);
        return res;
    }

    @Get(':id')
    async getTeamById(
        @Param('id', isStringRequired) id: string
    ) {
        const res = await this.teamService.getTeamById(id);
        return res;
    }


    @Get()
    async getAllTeams() {
        const res = await this.teamService.getAllTeams();
        return res;
    }

    @Post(':team/members')
    async insertMembersByTeamId(
        @Body('members', isArrayStringRequired) ids: string[],
        @Param('team', isStringRequired) teamId: string
    ) {
        const res = this.teamService.insertTeamIdForMembers(ids, teamId);
        return res;
    }


    @Delete(':team/members')
    async removeMembersByTeamId(
        @Body('members', isArrayStringRequired) ids: string[],
        @Param('team', isStringRequired) teamId: string
    ) {
        const res = this.teamService.removeMembersByTeamId(ids, teamId);
        return res;
    }


    @Get(':team/members')
    async getMembersByTeamId(
        @Param('team', isStringRequired) teamId: string
    ) {
        const res = this.teamService.getMembersByTeamId(teamId);
        return res;
    }

}
