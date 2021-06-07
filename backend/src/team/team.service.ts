import { Inject, Injectable, NotFoundException, forwardRef, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from './team.model'
import { UsersService } from '../user/user.service'
import { DepartmentService } from '../department/department.service'


@Injectable()
export class TeamService {
    constructor(
        @InjectModel('Team') private readonly teamModel: Model<Team>,
        @Inject(forwardRef(() => DepartmentService)) private readonly departmentService: DepartmentService,
        private readonly usersService: UsersService
    ) { }

    async insertTeam(
        code: String,
        name: String,
        pic: String,
        department: String,
        sologan: String
    ) {
        let user = await this.usersService.findUserById(pic);
        await this.departmentService.findDepartmentById(department);
        let teams = await this.teamModel.find().where({ code: code }).exec()
        if (teams.length) {
            throw new HttpException('Team Code Existed', 401);
        }
        const newTeam = new this.teamModel({
            code,
            name,
            pic,
            department,
            sologan
        });
        const res = await newTeam.save();
        if (user.teams.indexOf(res.id) < 0) {
            user.teams.push(res.id)
            await user.save()
        }
        return {
            id: res.id
        };
    }

    async updateTeam(
        id: String,
        code: String,
        name: String,
        pic: String,
        department: String,
        sologan: String
    ) {
        let team = await this.findTeamById(id);
        let user = await this.usersService.findUserById(pic);
        await this.departmentService.findDepartmentById(department);
        if (team.code != code) {
            let teams = await this.teamModel.find().where({ code: code }).exec()
            if (teams.length) {
                throw new HttpException('Team Code Existed', 401);
            }
        }
        team.code = code;
        team.name = name;
        team.pic = pic;
        team.department = department;
        team.sologan = sologan
        const res = await team.save();
        if (user.teams.indexOf(res.id) < 0) {
            user.teams.push(res.id)
            await user.save()
        }
        return {
            id: res.id
        };
    }

    async getTeamById(id: String) {
        const team = await this.findTeamById(id);
        return {
            id: team.id,
            code: team.code,
            pic: team.pic,
            name: team.name,
            rate: team.rate,
            achievements: team.achievements,
            department: team.department,
            sologan: team.sologan,
            createAt: team.createAt
        }
    }

    async getAllTeams() {
        const teams = await this.teamModel.find().populate('pic').exec();
        return teams.map(team => ({
            id: team.id,
            code: team.code,
            pic: team.pic,
            name: team.name,
            rate: team.rate,
            achievements: team.achievements,
            department: team.achievements,
        }));
    }

    async getMembersByTeamId(id: String) {
        const users = await this.usersService.getMembersByTeamId(id);
        return users;
    }


    async insertTeamIdForMembers(
        ids: String[],
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
        ids: String[],
        idTeam: String
    ) {
        const team = await this.findTeamById(idTeam);
        if (team) {
            const users = await this.usersService.removeTeamIdFromUsers(ids, idTeam);
            return users;
        }
        return team;
    }

    async insertDepartmentForTeamsId(
        teamsId: String[],
        departmentId: String
    ) {
        let teams = await this.teamModel.find().where('_id').in(teamsId).exec();
        let teamsArr = [];
        for (let team of teams) {
            team.department = departmentId;
            const res = await team.save();
            teamsArr.push(res.id)
        }
        return {
            teams: teamsArr
        }
    }

    async removeDepartmentFromTeamsId(
        teamsId: String[],
        departmentId: String
    ) {
        let teams = await this.teamModel.find().where('_id').in(teamsId).exec();
        let teamsArr = [];
        for (let team of teams) {
            if (team.department == departmentId) {
                team.department = null;
                const res = await team.save();
                teamsArr.push(res.id)
            }
        }
        return {
            teams: teamsArr
        }
    }

    async getTeamsByDepartmentId(department: String) {
        const teams = await this.teamModel.find().where({ department: department }).exec();
        return teams.map(team => ({
            id: team.id,
            code: team.code,
            pic: team.pic,
            name: team.name,
            rate: team.rate,
            achievements: team.achievements,
            department: team.department,
            sologan: team.sologan,
            createAt: team.createAt
        }));
    }


    async findTeamById(id: String): Promise<Team> {
        let team: any;
        try {
            team = await this.teamModel.findById(id).populate('pic').populate('department').exec();
        } catch (error) {
            try {
                team = await this.teamModel.findById(id).exec()
            } catch (error) {
                throw new NotFoundException(error);
            }
        }
        if (!team) {
            throw new NotFoundException(`find team err ${id}`);
        }
        return team;
    }
}
