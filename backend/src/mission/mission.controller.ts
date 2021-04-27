import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch
} from '@nestjs/common';
import { MissionService } from './mission.service'

@Controller('missions')
export class MissionController {
    constructor(private readonly missionService: MissionService) { }

    @Post()
    async addMission(
        @Body('title') title: String,
        @Body('content') content: String,
        @Body('department') department: String,
        @Body('team') team: String,
    ) {
        const res = await this.missionService.insertMission(
            title,
            content,
            department,
            team
        );
        return { id: res };
    }
    @Get()
    async getMissions() {
        const res = await this.missionService.getMissions();
        return res;
    }
    @Get('department')
    async getDepartmentMissions(
        @Param('id') id: String
    ) {
        const res = await this.missionService.getDepartmentMissions(id);
        return res;
    }
    @Get('mission')
    async getSingleMission(
        @Param('id') id: String
    ) {
        const res = await this.missionService.getSingleMission(id);
        return res;
    }
    @Patch('status')
    async setStatusMission(
        @Param('mid') mid: String,
        @Body('status')status: String
    ) {
        const res = await this.missionService.setStatusMission(mid, status);
        return res;
    }

    @Patch('team')
    async setTeamMission(
        @Param('mid')mid: String,
        @Body('team')team: String
    ) {
        const res = await this.setTeamMission(mid, team);
        return res;
    }
}
