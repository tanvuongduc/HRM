import { Module } from '@nestjs/common';
import { CarrerService } from './carrer.service';
import { CarrerController } from './carrer.controller';

@Module({
  providers: [CarrerService],
  controllers: [CarrerController]
})
export class CarrerModule {}
