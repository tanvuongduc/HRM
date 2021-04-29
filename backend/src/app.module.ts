import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';
import { CompanyModule } from './company/company.module';
import { MongooseModule } from '@nestjs/mongoose'
import { MissionModule } from './mission/mission.module';
import { TimeoffModule } from './timeoff/timeoff.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/HRM'),UserModule, TeamModule, CompanyModule, MissionModule, TimeoffModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
