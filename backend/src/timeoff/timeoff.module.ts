import { Module, forwardRef } from '@nestjs/common';
import { TimeoffController } from './timeoff.controller';
import { TimeoffService } from './timeoff.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeoffSchema } from './timeoff.model';
import {UserModule} from '../user/user.module'


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Timeoff', schema: TimeoffSchema }]),
    forwardRef(()=>UserModule)
  ],
  controllers: [TimeoffController],
  providers: [TimeoffService]
})
export class TimeoffModule {}
