import { PartialType } from '@nestjs/mapped-type';
import { CreateLocalidadDto } from './create-localidad.dto';

export class UpdateLocalidadDto extends PartialType(CreateLocalidadDto) {}