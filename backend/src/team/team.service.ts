import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, Employee } from './team.model'
import { UsersService } from '../user/user.service'


@Injectable()
export class TeamService {
    constructor(
        @InjectModel('Team') private readonly teamModel: Model<Team>,
        private readonly usersService: UsersService
    ) { }

    async insertTeam(
        name: String,
        members: Employee,
        department: String,
        sologan: String
    ) {
        const newTeam = new this.teamModel({
            name,
            members,
            department,
            sologan
        });
        const res = await newTeam.save();
        return {
            id: res.id
        };
    }

    async getMembers(id:String){
        const users = await this.usersService.getMembers(id);
        return users;
    }
    async insertMembers(
        ids: [String],
        idTeam: String
    ) {
        const team = await this.findTeam(idTeam);
        if (team) {
            const users = await this.usersService.insertTeamForUsers(ids, idTeam);
            return users;
        }
        return team;
    }
    async removeMembers(
        ids: [String],
        idTeam: String
    ) {
        const team = await this.findTeam(idTeam);
        if (team) {
            const users = await this.usersService.removeTeamOfUsers(ids, idTeam);
            return users;
        }
        return team;
    }
    async getSingleTeam(id: String) {
        const team = await this.findTeam(id);
        return {
            id: team.id,
            name: team.name,
            rate: team.rate,
            achievements: team.achievements,
            department: team.department,
            sologan: team.sologan,
            createAt: team.createAt
        }
    }
    async getDepartmentTeam(department: String) {
        const teams = await this.teamModel.find().where({ department: department }).exec();
        return teams.map(team => ({
            id: team.id,
            name: team.name,
            rate: team.rate,
            achievements: team.achievements,
            department: team.achievements,
        }));
    }
    async getTeams() {
        const teams = await this.teamModel.find().exec();
        return teams.map(team => ({
            id: team.id,
            name: team.name,
            rate: team.rate,
            achievements: team.achievements,
            department: team.achievements,
        }));
    }

    async findTeam(id: String): Promise<Team> {
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
