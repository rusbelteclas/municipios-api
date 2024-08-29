import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipio } from './municipio.entity';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';

@Injectable()
export class MunicipioService {
  constructor(
    @InjectRepository(Municipio)
    private municipioRepository: Repository<Municipio>,
  ) {}

  create(createMunicipioDto: CreateMunicipioDto) {
    const municipio = this.municipioRepository.create(createMunicipioDto);
    return this.municipioRepository.save(municipio);
  }

  findAll() {
    return this.municipioRepository.find({ relations: ['estado'] });
  }

  findOne(id: number) {
    return this.municipioRepository.findOne({ where: { id }, relations: ['estado'] });
  }

  async update(id: number, updateMunicipioDto: UpdateMunicipioDto) {
    await this.municipioRepository.update(id, updateMunicipioDto);
    return this.municipioRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.municipioRepository.delete(id);
  }
}
