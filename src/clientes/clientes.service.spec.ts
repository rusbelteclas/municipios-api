import { Test, TestingModule } from '@nestjs/testing';
import { ClientesService } from './clientes.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Clientes } from './clientes.entity';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-clientes.dto';

describe('ClientesService', () => {
  let service: ClientesService;
  let repository: Repository<Clientes>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientesService,
        {
          provide: getRepositoryToken(Clientes),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ClientesService>(ClientesService);
    repository = module.get<Repository<Clientes>>(getRepositoryToken(Clientes));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a client', async () => {
    const cliente: CreateClienteDto = { 
      nombre: 'RUSBEL', 
      rfc: 'RUSBEL123', 
      calle: 'Calle Falsa', 
      numeroExterior: '123', 
      localidadId: 1, 
      email: 'rusbel@example.com', 
      telefono: '1234567890' 
    };
    jest.spyOn(repository, 'save').mockResolvedValue(cliente as any);
    expect(await service.create(cliente as any)).toBe(cliente);
  });

  // Agrega más pruebas unitarias para otros métodos
});
