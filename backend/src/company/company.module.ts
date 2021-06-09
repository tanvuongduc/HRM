import { Module,  forwardRef} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './company.model';
import {UserModule} from '../user/user.module';

@Module({
  imports:[
    forwardRef(()=>UserModule),
    MongooseModule.forFeature([{name: 'Company', schema: CompanySchema}]),
  ],
  providers: [CompanyService],
  controllers: [CompanyController],
  exports:[CompanyService]
})
export class CompanyModule { }
