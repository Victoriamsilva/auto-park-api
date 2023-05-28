import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './entities/type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type)
    private typeRepository: Repository<Type>,
  ) {}

  create(createTypeDto: CreateTypeDto) {
    return this.typeRepository.save(createTypeDto);
  }

  findAll() {
    return this.typeRepository.find();
  }

  findOne(id: any) {
    return this.typeRepository.findOne(id);
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return this.typeRepository.update(id, updateTypeDto);
  }

  remove(id: number) {
    return this.typeRepository.delete(id);
  }
}
