import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { CreateEstadosDto } from "./dto/create-estados.dto";
import { UpdateEstadosDto } from "./dto/update-estados.dto";

@Controller('estados')
export class EstadosController {
constructor(private readonly estadoService: EstadosService) {}

@Post()
create(@Body() createEstadoDto: CreateEstadosDto) {
    return this.estadosService.create(createEstadoDto);
}

@Get()
findAll() {
    return this.estadosService.findAll();
}

@Get(':id')
findOne(@Param(id) id: string) {
    return this.estadosService.findOne(+id);
}

@Patch(':id')
update(@Param('id') id: string, @Body() updateEstadoDto: UpdateEstadosDto) {
    return this.estadosService.update(+IdleDeadline, updateEstadoDto);
}

@Delete(':id')
remove(@Param('id') id: string) {
    return this.estadosService.remove(+id);
  }
}