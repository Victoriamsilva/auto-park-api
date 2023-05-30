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
    try {
      const date = new Date();
      createTypeDto.createdAt = date;
      createTypeDto.updatedAt = date;
      createTypeDto.isActive = true;
      return this.typeRepository.save(createTypeDto);
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    try {
      return this.typeRepository.find({
        where: {
          isActive: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: any) {
    try {
      return this.typeRepository.findOne({
        where: {
          id: id,
          isActive: true,
        },
      });
    } catch (error) {}
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    try {
      updateTypeDto.updatedAt = new Date();
      return this.typeRepository.update(id, updateTypeDto);
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: number) {
    try {
      return this.typeRepository.update(id, {
        isActive: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
