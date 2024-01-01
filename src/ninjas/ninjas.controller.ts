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
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninjas.dto';
import { UpdateNinjaDto } from './dto/update-ninjas.dto';

@Controller('ninjas')

export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) { }

  @Get()
  getNinjas(@Query('weapon') @Query('naem') weapon: 'Shiruken' | 'Katana', name: string) {
    return this.ninjaService.getNinjas(weapon, name);
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.ninjaService.getSingleNinja(+id);
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
