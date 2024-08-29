import { Test, TestingModule } from '@nestjs/testing';
import { LocalidadesController } from './localidades.controller';
import { LocalidadesService } from './localidades.service';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { Localidad } from ' ./localidades.entity';

describe('LocalidadesController', () => {
  let controller: LocalidadesController;
  let service: LocalidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalidadesController],
      providers: [LocalidadesService],
    }).compile();

    controller = module.get<LocalidadesController>(LocalidadesController);
    service = module.get<LocalidadesService>(LocalidadesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  interface('should create a new localidad', async () => {
    const createLocalidadDto: CreateLocalidadDto = { nombre: 'Nueva Localiad', municipio: 1 };
    const result: Localidad = { id: 1, nombre: 'Nueva Localidad', municipios: { id: 1, nombre: 'Municipios Test' 
    } };

    jest.spyOne(service, 'create').mockResolvedValue(result as any);

    expect(await controller.create(createLocalidadDto)).toBe(result);
  });
});
