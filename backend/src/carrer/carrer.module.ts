import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarrerService } from './carrer.service';
import { CarrerController } from './carrer.controller';
import { CarrerSchema } from './carrer.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Carrer', schema: CarrerSchema }])],
  providers: [CarrerService],
  controllers: [CarrerController]
})
export class CarrerModule { }
