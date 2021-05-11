import { Test, TestingModule } from '@nestjs/testing';
import { CarrerService } from './carrer.service';

describe('CarrerService', () => {
  let service: CarrerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarrerService],
    }).compile();

    service = module.get<CarrerService>(CarrerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
