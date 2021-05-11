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
        title: String,
        content: String,
        department: String,
        team: String,
    ) {
        const newMission = new this.missionModel({
            title,
            content,
            department,
            team,
            createBy: "me"
        });
        const res = await newMission.save();
        return res.id as String;
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
        department: String
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
        mid: String
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
        mid: String,
        status: String
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
        mid: String,
        team: String
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
    private async findMission(id: String): Promise<Mission> {
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
