import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './company.model';
import {UserModule} from '../user/user.module';

@Module({
  imports:[
    UserModule,
    MongooseModule.forFeature([{name: 'Company', schema: CompanySchema}]),
  ],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule { }
