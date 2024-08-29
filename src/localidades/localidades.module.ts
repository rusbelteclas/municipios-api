import { Module } from '@nestjs/common';
import { LocalidadesService } from './localidades.service';
import { LocalidadesController } from './localidades.controller';

@Module({
  providers: [LocalidadesService],
  controllers: [LocalidadesController]
})
export class LocalidadesModule {}
