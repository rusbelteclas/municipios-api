import { Test, TestingModule } from '@nestjs/testing';
import { MunicipioController } from './municipio.controller';
import { MunicipioService } from './municipio.service';
import { CreateMunicipioDto } from './dto/create-municipio.dto';

describe('MunicipioController', () => {
  let controller: MunicipioController;
  let service: MunicipioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MunicipioController],
      providers: [MunicipioService],
    }).compile();

    controller = module.get<MunicipioController>(MunicipioController);
    service = module.get<MunicipioService>(MunicipioService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new municipio', async () => {
    const createMunicipioDto: CreateMunicipioDto = { nombre: 'Nuevo Municipio', estadoId: 1 };
    jest.spyOn(service, 'create').mockResolvedValue(createMunicipioDto as any);
    expect(await controller.create(createMunicipioDto)).toBe(createMunicipioDto);
  });

  // Agrega más pruebas unitarias aquí para otros métodos
});
