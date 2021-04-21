import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    UserModule,
    CompanyModule,
    MongooseModule.forRoot('mongodb://localhost:27017/HRM',),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
