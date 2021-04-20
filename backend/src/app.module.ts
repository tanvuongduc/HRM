import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CompanyController } from './company/company.controller';
import { TeamController } from './team/team.controller';
import { TeamService } from './team/team.service';
import { TeamModule } from './team/team.module';

@Module({
  imports: [UserModule, TeamModule],
  controllers: [AppController, CompanyController, TeamController],
  providers: [AppService, TeamService],
})
export class AppModule {}
