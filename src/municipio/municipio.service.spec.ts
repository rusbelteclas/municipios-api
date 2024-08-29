import { Test, TestingModule } from '@nestjs/testing';
import { MunicipioService } from './municipio.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Municipio } from './municipio.entity';
import { Repository } from 'typeorm';
import { CreateMunicipioDto } from './dto/create-municipio.dto';

describe('MunicipioService', () => {
  let service: MunicipioService;
  let repository: Repository<Municipio>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MunicipioService,
        {
          provide: getRepositoryToken(Municipio),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<MunicipioService>(MunicipioService);
    repository = module.get<Repository<Municipio>>(getRepositoryToken(Municipio));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new municipio', async () => {
    const municipio: CreateMunicipioDto = { nombre: 'Nuevo Municipio', estadoId: 1 };
    jest.spyOn(repository, 'save').mockResolvedValue(municipio as any);
    expect(await service.create(municipio)).toBe(municipio);
  });

  // Agrega más pruebas unitarias aquí para otros métodos
});
