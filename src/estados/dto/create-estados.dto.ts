import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEstadosDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;
}