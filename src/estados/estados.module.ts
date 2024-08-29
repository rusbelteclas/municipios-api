import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadosService } from './estados.service';
import { EstadosController } from './estados.controller';
import { Estado } from './estados.entity';

@Module({
  providers: [EstadosService],
  controllers: [EstadosController],
  imports: [TypeOrmModule.forFeature([Estado])],
})
export class EstadosModule {}
