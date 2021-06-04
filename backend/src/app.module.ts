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
import { DepartmentModule } from './department/department.module';
import { CompanyModule } from './company/company.module';
import { CertificateModule } from './certificate/certificate.module';
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DATABASE),
        ServeStaticModule.forRoot({
            rootPath: BASEPATH
        }),
        UserModule,
        TeamModule,
        MissionModule,
        TimeoffModule,
        DocumentModule,
        AuthModule,
        DepartmentModule,
        CompanyModule,
        CertificateModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
   
}
