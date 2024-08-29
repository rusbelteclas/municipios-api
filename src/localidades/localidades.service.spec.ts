import { Test, TestingModule } from '@nestjs/testing';
import { LocalidadesService } from './localidades.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Localidad } from './localidades.entity';
import { Repository } from 'typeorm';
import { CreateLocalidadDto } from './dto/create-localidad.dto';

describe('LocalidadesService', () => {
  let service: LocalidadesService;
  let repository: Repository<Localidad>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocalidadesService,
        {
          provide: getRepositoryToken(Localidad),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<LocalidadesService>(LocalidadesService);
    repository = module.get<Repository<Localidad>>(getRepositoryToken(Localidad));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new localidad', async () => {
    const localidad: Localidad = { id: 1, nombre: 'Nueva Localidad', municipio: { id: 1, nombre: 'Municipio Test' } };
    const createLocalidadDto: CreateLocalidadDto = { nombre: 'Nueva Localidad', municipioId: 1 };

    jest.spyOn(repository, 'save').mockResolvedValue(localidad);

    expect(await service.create(createLocalidadDto)).toBe(localidad);
  });

  // Agrega más pruebas unitarias aquí para otros métodos
});
