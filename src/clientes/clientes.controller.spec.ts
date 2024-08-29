import { Test, TestingModule } from '@nestjs/testing';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-clientes.dto';

describe('ClientesController', () => {
  let controller: ClientesController;
  let service: ClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientesController],
      providers: [ClientesService],
    }).compile();

    controller = module.get<ClientesController>(ClientesController);
    service = module.get<ClientesService>(ClientesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new client', async () => {
    const createClienteDto: CreateClienteDto = { 
      nombre: 'Rusbel', 
      rfc: 'RUSBEL123', 
      calle: 'Calle Falsa', 
      numeroExterior: '123', 
      localidadId: 1, 
      email: 'Rusbel@example.com', 
      telefono: '0123456789' 
    };

    jest.spyOn(service, 'create').mockResolvedValue(createClienteDto as any);
    
    expect(await controller.create(createClienteDto)).toEqual(createClienteDto);
  });

  // Agrega más pruebas unitarias aquí para otros métodos
});
