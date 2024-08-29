import { Module } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { EstadosController } from './estados.controller';

@Module({
  providers: [EstadosService],
  controllers: [EstadosController]
})
export class EstadosModule {}
