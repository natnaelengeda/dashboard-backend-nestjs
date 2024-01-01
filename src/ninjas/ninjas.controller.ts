import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

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
