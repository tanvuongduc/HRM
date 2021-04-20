import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CompanyController } from './company/company.controller';
import { TeamController } from './team/team.controller';
import { TeamService } from './team/team.service';
import { TeamModule } from './team/team.module';
import { CompanyService } from './company/company.service';
import { CompanyModule } from './company/company.module';
import { MongooseModule } from '@nestjs/mongoose'


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'),UserModule, TeamModule, CompanyModule],
  controllers: [AppController, CompanyController, TeamController],
  providers: [AppService, TeamService, CompanyService],
})
export class AppModule { }
