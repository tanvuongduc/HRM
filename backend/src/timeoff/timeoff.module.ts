import { Module } from '@nestjs/common';
import { TimeoffController } from './timeoff.controller';
import { TimeoffService } from './timeoff.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeoffSchema } from './timeoff.model'


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Timeoff', schema: TimeoffSchema }]),
  ],
  controllers: [TimeoffController],
  providers: [TimeoffService]
})
export class TimeoffModule {}
