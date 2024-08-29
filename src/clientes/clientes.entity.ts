import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Localidad } from '../localidades/localidades.entity';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Localidad, (localidad) => localidad.clientes)
  localidad: Localidad;
}
