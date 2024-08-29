import { Module } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { MunicipioController } from './municipio.controller';

@Module({
  providers: [MunicipioService],
  controllers: [MunicipioController]
})
export class MunicipioModule {}
