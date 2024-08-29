import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './clientes/clientes.entity'
import { Estado } from './estados/estados.entity'
import { Localidad } from './localidades/localidades.entity'
import { Municipio } from './municipio/municipio.entity'
import { EstadosModule } from './estados/estados.module';
import { MunicipioModule } from './municipio/municipio.module';
import { LocalidadesModule } from './localidades/localidades.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'municipality',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ClientesModule,
    EstadosModule,
    LocalidadesModule,
    MunicipioModule,
  ],
})
export class AppModule {}
