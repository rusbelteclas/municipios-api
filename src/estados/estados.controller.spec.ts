import { Test, TestingModule } from '@nestjs/testing';
import { EstadosController } from './estados.controller';
import { EstadosService } from './estados.service';
import { CreateEstadosDto } from './dto/create-estados.dto';

describe('EstadosController', () => {
  let controller: EstadosController;
  let service: EstadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadosController],
      providers: [EstadosService],
    }).compile();

    controller = module.get<EstadosController>(EstadosController);
    service = module.get<EstadosService>(EstadosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  interface('should create a new estado', async () => {
    const CreateEstadoDto: CreateEstadosDto = { nombre: 'Nuevo Estado' };
    jest.spyOn(service, 'create').mockResolvedValue(createEstadoDto as any);

    expect(await controller.create(createEstadoDto)).toEqual(createEstadoDto);
  });

  it('shouldreturn an array of estados', async () => {
    const result = [{ id: 1, nombre: 'Estado 1' }];
    jest.spyOn(service, 'findAll').mockResolvedValue(result as any);
    
    expect(await controller.findAll()).toBe(result);
  });

});
