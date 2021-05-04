import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, Employee } from './team.model'


@Injectable()
export class TeamService {
    constructor(@InjectModel('Team') private readonly teamModel: Model<Team>){}

    async insertTeam(
        name: String,
        member: Employee,                             
        department: String,
        sologan: String
    ){
        const newTeam = new this.teamModel({
            name,
            member,               
            department,
            sologan
        });
        const res = await newTeam.save();
        return {
            id: res.id
        };
    }

    async getSingleTeam(id: String){
        const team = await this.findTeam(id);
        return {
            id: team.id,
            name: team.name,
            member: team.member,
            rate: team.rate,
            achievements: team.achievements,                
            department: team.achievements,
            sologan: team.sologan,
            createAt: team.createAt
        }
    }
    async getDepartmentTeam(department: String){
        const teams = await this.teamModel.find().where({department: department}).exec();
        return teams.map(team=>({
            id: team.id,
            name: team.name,
            member: team.member,
            rate: team.rate,
            achievements: team.achievements,                
            department: team.achievements,
        }));
    }
    async getTeams(){
        const teams = await this.teamModel.find().exec();
        return teams.map(team=>({
            id: team.id,
            name: team.name,
            member: team.member,
            rate: team.rate,
            achievements: team.achievements,                
            department: team.achievements,
        }));
    }

    private async findTeam(id: String): Promise<Team> {
        let team: any;
        try {
            team = await this.teamModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find Team.');
        }
        if (!team) {
            throw new NotFoundException(`find team err ${id}`);
        }
        return team;
    }
}
