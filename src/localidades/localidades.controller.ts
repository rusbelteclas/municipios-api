import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { LocalidadesService } from './localidades.service';
import { CreateLocalidadesDto } from './dto/create-localidades.dto';
import { UpdateLocalidadesDto } from './dto/update-localidades.dto';

@Controller('localidades')
export class LocalidadesController {
constructor(private readonly localidadesService: LocalidadesService) {}

@Post()
create(@Body() createLocalidadDto: CreateLocalidadDto) {
    return this.localidadesService.create(createlocalidadDto);
}

@Get()
findAll() {
    return this.localidadService.findAll();
}

@Get(':id')
findOne(@Param(id) id: string) {
    return this.localidadService.findOne(+id);
}

@Patch(':id')
update(@Param('id') id: string, @Body() updateLocalidadDto: UpdateLocalidadDto) {
    return this.localidadesService.update(+id, updateLocalidadDto);
}

@Delete(':id')
remove(@Param('id') id: string) {
    return this.localidadesService.remove(+id);
  }
}
