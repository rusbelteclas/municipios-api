import { Entity, Column, primaryGenerateColumn, OnetoMany } from "typeorm";
import { Municipio } from "../municipio/municipio.entity";

@Entity('estados')
export class Estado {
    @primaryGenerateColumn()
    id: number;

    @Column()
    nombre: string;

    @OnetoMany(() => Municipio, municipio => municipio.estado)
    municipios: Municipio[];
}
