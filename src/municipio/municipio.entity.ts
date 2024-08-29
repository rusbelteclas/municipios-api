import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Estado } from '../estados/estados.entity';
import { Localidad } from '../localidades/localidades.entity';

@Entity('municipios')
export class Municipio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Estado, (estado) => estado.municipios)
  estado: Estado;

  @OneToMany(() => Localidad, (localidad) => localidad.municipio)
  localidades: Localidad[];
}
