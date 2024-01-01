import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninjas.dto';
import { UpdateNinjaDto } from './dto/update-ninjas.dto';

@Controller('ninjas')

export class NinjasController {

  @Get()
  getNinjas(@Query('type') type: string) {
    return {
      type
    };
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id
    };
  }

  @Post()
  createNinjas(@Body() createBodyDto: CreateNinjaDto) {
    return {
      name: createBodyDto.name
    };
  }

  @Put(':id')
  updateNinjas(@Param('id') id: string, @Body() updateNinjaDTo: UpdateNinjaDto) {
    return {
      id,
      name: updateNinjaDTo.name
    };
  }

  @Delete()
  deleteNinjas() {
    return [];
  }
}
