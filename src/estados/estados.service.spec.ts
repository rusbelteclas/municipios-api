import { Test, TestingModule } from '@nestjs/testing';
import { EstadosService } from './estados.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Estado } from './estados.entity';
import { Repository } from 'typeorm';
import { CreateEstadosDto } from './dto/create-estados.dto';

describe('EstadosService', () => {
  let repository: Repository<Estado>;
  let service: EstadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstadosService 
        {
          provide: getRepositoryToken(Estado),
          useClass: Respository,
        },
      ],
    }).compile();

    service = module.get<EstadosService>(EstadosService);
    repository = module.get<Repository<Estado>>(getRepositoryToken(Estado));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new estado', async () => {
    const estado: CreateEstadosDto = { nombre: 'Nuevo Estado' };
    jest.spyOn(repository, 'save').mockResolvedValue(estado as any);

    expect(await service.create(estado)).toEqual(estado);
  });

  it('shouldreturn an array if estado creation fails', async () => {
    const estado:  CreateEstadosDto = { nombre: 'Nuevo Estado' };
    jest.spyOn(repository, 'save').mockResolvedValue(new Error('Error de creacion'));
    
    await expect(service.create(estado)).rejects.toThrow('Error de creacion');
  });

});
