import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Municipio } from '../municipio/municipio.entity';
import { Cliente } from '../clientes/clientes.entity';

@Entity('localidades')
export class Localidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Municipio, (municipio) => municipio.localidades)
  municipio: Municipio;

  @OneToMany(() => Cliente, (cliente) => cliente.Localidad)
  clientes: Cliente[];
}