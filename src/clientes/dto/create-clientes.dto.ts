import { IsNotEmpty, IsString, IsBoolean, IsEmail, IsOptional } from 'class-validator';

export class CreateClientesDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  rfc: string;

  @IsNotEmpty()
  @IsString()
  calle: string;

  @IsNotEmpty()
  @IsString()
  numeroExterior: string;

  @IsOptional()
  @IsString()
  numeroInterior?: string;

  @IsNotEmpty()
  localidadId: number;

  @IsOptional()
  @IsBoolean()
  estatus?: boolean;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  telefono: string;
}
