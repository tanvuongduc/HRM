import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';
import { CompanyModule } from './company/company.module';
import { MongooseModule } from '@nestjs/mongoose'
import { MissionModule } from './mission/mission.module';
import { DepartmentModule } from './department/department.module';
import { CarrerModule } from './carrer/carrer.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/HRM'), UserModule,
    TeamModule,
    CompanyModule,
    MissionModule,
    DepartmentModule,
    CarrerModule,
    CompanyModule],
})
export class AppModule { }
