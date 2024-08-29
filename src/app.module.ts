import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadosModule } from './estados/estados.module';
import { MunicipioModule } from './municipio/municipio.module';
import { LocalidadesModule } from './localidades/localidades.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [EstadosModule, MunicipioModule, LocalidadesModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
