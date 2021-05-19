import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { UserSchema } from '../user/user.model'
import { UsersService } from '../user/user.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [
        UserModule,
        PassportModule,
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),


    ],
    providers: [AuthService, LocalStrategy, UsersService],
})
export class AuthModule { }
