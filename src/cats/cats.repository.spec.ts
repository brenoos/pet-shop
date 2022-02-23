import { Test, TestingModule } from '@nestjs/testing';
import { CatsRepository } from './cats.repository';

describe('CatsRepository', () => {
  let provider: CatsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsRepository],
    }).compile();

    provider = module.get<CatsRepository>(CatsRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
