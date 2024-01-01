import { PartialType } from '@nestjs/mapped-types';
import { CreateNinjaDto } from './create-ninjas.dto';

export class UpdateNinjaDto extends PartialType(CreateNinjaDto) { }
