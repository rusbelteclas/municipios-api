import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './clientes.entity';
import { CreateClientesDto } from './dto/create-clientes.dto';
import { UpdateClientesDto } from './dto/update-clientes.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clientesRepository: Repository<Cliente>,
  ) {}

  create(createClienteDto: CreateClientesDto): Promise<Cliente> {
    const cliente = this.clientesRepository.create(createClienteDto);
    return this.clientesRepository.save(cliente);
  }

  findAll(): Promise<Cliente[]> {
    return this.clientesRepository.find({ relations: ['localidad'] });
  }

  findOne(id: number): Promise<Cliente> {
    return this.clientesRepository.findOne({ where: { id }, relations: ['localidad'] });
  }

  async update(id: number, updateClienteDto: UpdateClientesDto): Promise<Cliente> {
    await this.clientesRepository.update(id, updateClienteDto);
    const updatedClient = await this.clientesRepository.findOne({ where: { id }, relations: ['localidad'] });
    if (!updatedClient) {
      throw new NotFoundException(`Cliente with ID ${id} not found`);
    }
    return updatedClient;
  }

  async remove(id: number): Promise<void> {
    const result = await this.clientesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cliente with ID ${id} not found`);
    }
  }
}
