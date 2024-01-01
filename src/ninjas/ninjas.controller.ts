import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NinjasService } from './ninjas.service';

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
  createNinjas(@Body() createBodyDto: any) {
    return [];
  }

  @Put(':id')
  updateNinjas() {
    return [];
  }

  @Delete()
  deleteNinjas() {
    return [];
  }
}
