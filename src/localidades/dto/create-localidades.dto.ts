import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateLocalidadDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsInt()
    municipioId:number;
}