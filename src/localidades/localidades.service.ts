import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Localidad } from './localidades.entity';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';

@Injectable()
export class LocalidadesService {
  constructor(
    @InjectRepository(Localidad)
    private localidadesRepository: Repository<Localidad>,
  ) {}

  create(createLocalidadDto: CreateLocalidadDto) {
    const localidad = this.localidadesRepository.create(createLocalidadDto);
    return this.localidadesRepository.save(localidad);
  }

  findAll() {
    return this.localidadesRepository.find({ relations: ['municipio'] });
  }

  findOne(id: number) {
    return this.localidadesRepository.findOne({ where: { id }, relations: ['municipio'] });
  }

  async update(id: number, updateLocalidadDto: UpdateLocalidadDto) {
    await this.localidadesRepository.update(id, updateLocalidadDto);
    return this.localidadesRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.localidadesRepository.delete(id);
  }
}
