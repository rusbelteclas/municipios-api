import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estado } from './estados.entity';
import { CreateEstadosDto } from './dto/create-estados.dto';
import { UpdateEstadosDto } from './dto/update-estados.dto';

@Injectable()
export class EstadosService {
  constructor(
    @InjectRepository(Estado)
    private estadosRepository: Repository<Estado>,
  ) {}

  async create(createEstadoDto: CreateEstadosDto) {
    try {
      const estado = this.estadosRepository.create(createEstadoDto);
      return await this.estadosRepository.save(estado);
    } catch (error) {
      throw new Error(`Error al crear el estado: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.estadosRepository.find();
    } catch (error) {
      throw new Error(`Error al obtener los estados: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      return await this.estadosRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error(`Error al encontrar el estado: ${error.message}`);
    }
  }

  async update(id: number, updateEstadoDto: UpdateEstadosDto) {
    try {
      await this.estadosRepository.update(id, updateEstadoDto);
      return await this.estadosRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error(`Error al actualizar el estado: ${error.message}`);
    }
  }

  async remove(id: number) {
    try {
      return await this.estadosRepository.delete(id);
    } catch (error) {
      throw new Error(`Error al eliminar el estado: ${error.message}`);
    }
  }
}
