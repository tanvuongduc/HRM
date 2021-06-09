import { CompanyModule } from './../company/company.module';
import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { UserSchema } from './user.model';
import { CertificateModule } from '../certificate/certificate.module'

@Module({
    imports: [
        forwardRef(() => CompanyModule),
        forwardRef(() => CertificateModule),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UserModule { }