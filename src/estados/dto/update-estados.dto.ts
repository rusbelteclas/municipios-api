import { PartialType } from '@nest/mapped-types';
import { CreateEstadosDto } from './create-estados.dto';

export class UpdateEstadosDto extends PartialType(CreateEstadosDto){}