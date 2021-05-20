import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentSchema } from './department.model';
import { TeamModule } from '../team/team.module'

@Module({
    imports: [
        TeamModule,
        MongooseModule.forFeature([{ name: 'Department', schema: DepartmentSchema }]),
    ],
    providers: [DepartmentService],
    controllers: [DepartmentController]
})
export class DepartmentModule { }
