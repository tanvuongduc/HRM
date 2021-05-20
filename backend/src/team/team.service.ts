import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from './team.model'
import { UsersService } from '../user/user.service'


@Injectable()
export class TeamService {
    constructor(
        @InjectModel('Team') private readonly teamModel: Model<Team>,
        private readonly usersService: UsersService
    ) { }

    async insertTeam(
        name: String,
        pic: String,
        department: String,
        sologan: String
    ) {
        const newTeam = new this.teamModel({
            name,
            pic,
            department,
            sologan
        });
        const res = await newTeam.save();
        return {
            id: res.id
        };
    }


    async getMembersByTeamId(id: String) {
        const users = await this.usersService.getMembersByTeamId(id);
        return users;
    }


    async insertTeamIdForMembers(
        ids: [String],
        idTeam: String
    ) {
        const team = await this.findTeamById(idTeam);
        if (team) {
            const users = await this.usersService.insertTeamIdForUsers(ids, idTeam);
            return users;
        }
        return team;
    }


    async removeMembersByTeamId(
        ids: [String],
        idTeam: String
    ) {
        const team = await this.findTeamById(idTeam);
        if (team) {
            const users = await this.usersService.removeTeamIdFromUsers(ids, idTeam);
            return users;
        }
        return team;
    }


    async getSingleTeamById(id: String) {
        const team = await this.findTeamById(id);
        return {
            id: team.id,
            pic: team.pic,
            name: team.name,
            rate: team.rate,
            achievements: team.achievements,
            department: team.department,
            sologan: team.sologan,
            createAt: team.createAt
        }
    }


    async getTeamsByDepartmentId(department: String) {
        const teams = await this.teamModel.find().where({ department: department }).exec();
        return teams.map(team => ({
            id: team.id,
            pic: team.pic,
            name: team.name,
            rate: team.rate,
            achievements: team.achievements,
            department: team.department,
            sologan: team.sologan,
            createAt: team.createAt
        }));
    }



    async getAllTeams() {
        const teams = await this.teamModel.find().populate('pic').exec();
        return teams.map(team => ({
            id: team.id,
            pic: team.pic,
            name: team.name,
            rate: team.rate,
            achievements: team.achievements,
            department: team.achievements,
        }));
    }

    async findTeamById(id: String): Promise<Team> {
        let team: any;
        try {
            team = await this.teamModel.findById(id).populate('pic').populate('department').exec();
        } catch (error) {
            throw new NotFoundException('Could not find Team.');
        }
        if (!team) {
            throw new NotFoundException(`find team err ${id}`);
        }
        return team;
    }
}
