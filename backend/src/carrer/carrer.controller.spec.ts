import { Test, TestingModule } from '@nestjs/testing';
import { CarrerController } from './carrer.controller';

describe('CarrerController', () => {
  let controller: CarrerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarrerController],
    }).compile();

    controller = module.get<CarrerController>(CarrerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
