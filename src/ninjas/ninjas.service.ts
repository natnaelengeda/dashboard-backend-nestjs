import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninjas.dto';

@Injectable()
export class NinjasService {
  private Ninjas = [
    { id: 0, name: 'NinjaA', weapon: 'Shuriken' },
    { id: 1, name: 'NinjaB', weapon: 'Katana' }
  ];

  getNinjas(weapon?: 'Shiruken' | 'Katana', name?: string) {
    if (weapon) {
      return this.Ninjas.filter((ninja) => ninja.weapon === weapon);
    }

    if (name) {
      return this.Ninjas.filter((ninja) => ninja.name === name);
    }

    return this.Ninjas;
  }

  getSingleNinja(id: number) {
    const ninja = this.Ninjas.find((ninja) => ninja.id === id);

    if (!ninja) {
      throw new Error(`Ninja with id ${id} not found`);
    }
    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: Date.now(),
    };

    this.Ninjas.push(createNinjaDto);

    return newNinja
  }
}
