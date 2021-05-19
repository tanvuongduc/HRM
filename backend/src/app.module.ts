import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';
import { MongooseModule } from '@nestjs/mongoose'
import { MissionModule } from './mission/mission.module';
import { TimeoffModule } from './timeoff/timeoff.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BASEPATH } from './base'
import { DocumentModule } from './document/document.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/HRM'),
        ServeStaticModule.forRoot({
            rootPath: BASEPATH
        }),
        UserModule,
        TeamModule,
        MissionModule,
        TimeoffModule,
        DocumentModule,
        AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
   
}
