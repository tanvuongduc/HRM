import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { TeamSchema } from './team.model';
import { UserSchema } from '../user/user.model';
import { UsersService } from '../user/user.service'

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Team', schema: TeamSchema},{ name: 'User', schema: UserSchema }]),
    ],
    controllers: [TeamController],
    providers: [TeamService, UsersService],
})
export class TeamModule {}
