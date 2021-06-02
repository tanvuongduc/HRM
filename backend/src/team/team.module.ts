import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { TeamSchema } from './team.model';
import { UserModule } from '../user/user.module';
import { DepartmentModule } from '../department/department.module'

@Module({
    imports: [
        forwardRef(() =>DepartmentModule),
        forwardRef(() =>UserModule),
        MongooseModule.forFeature([{ name: 'Team', schema: TeamSchema }]),
    ],
    controllers: [TeamController],
    providers: [TeamService],
    exports: [TeamService]
})
export class TeamModule { }
