import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  create(createClientDto: CreateClientDto) {
    try {
      const date = new Date();
      createClientDto.createdAt = date;
      createClientDto.updatedAt = date;
      createClientDto.isActive = true;
      return this.clientRepository.save(createClientDto);
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    try {
      return this.clientRepository.find({ where: { isActive: true } });
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: any) {
    try {
      return this.clientRepository.findOne({
        where: { id: id, isActive: true },
      });
    } catch (error) {
      console.log(error);
    }
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    try {
      return this.clientRepository.update(id, {
        ...updateClientDto,
        updatedAt: new Date(),
      });
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: number) {
    try {
      return this.clientRepository.update(id, {
        isActive: false,
        updatedAt: new Date(),
      });
    } catch (error) {
      return this.clientRepository.update(id, {
        isActive: false,
        updatedAt: new Date(),
      });
    }
  }
}
