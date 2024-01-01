import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-ninjas.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) { }
