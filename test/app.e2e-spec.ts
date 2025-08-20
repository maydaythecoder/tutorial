import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    const app = moduleRef.createNestApplication();
    await app.init();
    await app.listen(3000);
  });
  it.todo('should be defined');
});
