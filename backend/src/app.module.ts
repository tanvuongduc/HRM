import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { DepartmentModule } from './department/department.module';
import { CarrerModule } from './carrer/carrer.module';


@Module({
  imports: [
    UserModule,
    CompanyModule,
    MongooseModule.forRoot('mongodb://localhost:27017/HRM',),
    DepartmentModule,
    CarrerModule,
    
  ],
})
export class AppModule { }
