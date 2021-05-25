import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { TeamSchema } from './team.model'

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Team', schema: TeamSchema}]),
    ],
    controllers: [TeamController],
    providers: [TeamService],
})
export class TeamModule {}
