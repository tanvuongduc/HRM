import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mission } from './mission.model'


@Injectable()
export class MissionService {
    constructor(
        @InjectModel('Mission') private readonly missionModel: Model<Mission>
    ) { }


    async insertMission(
        title: string,
        content: string,
        department: string,
        team: string,
    ) {
        const newMission = new this.missionModel({
            title,
            content,
            department,
            team,
            createBy: "me"
        });
        const res = await newMission.save();
        return res.id as string;
    }
    async getMissions() {
        const missions = await this.missionModel.find().exec();
        return missions.map(mission=>({
            id: mission.id,
            title: mission.title,
            content: mission.content,
            department: mission.department,
            team: mission.team,
            status: mission.status,
            createAt: mission.createAt,
            createBy: mission.createBy,
        }));
    }
    async getDepartmentMissions(
        department: string
    ) {
        const missions = await this.missionModel.find().select({department:department}).exec();
        return missions.map(mission=>({
            id: mission.id,
            title: mission.title,
            content: mission.content,
            department: mission.department,
            team: mission.team,
            status: mission.status,
            createAt: mission.createAt,
            createBy: mission.createBy,
        }));
    }
    async getSingleMission(
        mid: string
    ) {
        const mission = await this.findMission(mid);
        return {
            id: mission.id,
            title: mission.title,
            content: mission.content,
            team: mission.team,
            status: mission.status,
            createAt: mission.createAt,
            createBy: mission.createBy,
        }
    }
    async setStatusMission(
        mid: string,
        status: string
    ) {
        const mission = await this.findMission(mid);
        mission.status = status;
        const result = await mission.save();
        return {
            id: result.id,
            title: result.title,
            content: result.content,
            team: result.team,
            status: result.status,
            createAt: result.createAt,
            createBy: result.createBy,
        }
    }
    async setTeamMission(
        mid: string,
        team: string
    ) {
        const mission = await this.findMission(mid);
        mission.team = team;
        const result = await mission.save();
        return {
            id: result.id,
            title: result.title,
            content: result.content,
            team: result.team,
            status: result.status,
            createAt: result.createAt,
            createBy: result.createBy,
        }
    }
    private async findMission(id: string): Promise<Mission> {
        let mission: any;
        try {
            mission = await this.missionModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find mission.');
        }
        if (!mission) {
            throw new NotFoundException('Could not find mission.');
        }
        return mission;
    }
}
