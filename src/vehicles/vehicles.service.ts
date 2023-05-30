import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    try {
      const date = new Date();
      createVehicleDto.createdAt = date;
      createVehicleDto.updatedAt = date;
      createVehicleDto.isActive = true;
      return this.vehicleRepository.save(createVehicleDto);
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    try {
      return this.vehicleRepository.find({
        where: {
          isActive: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  findByClient(id: any) {
    return this.vehicleRepository.find({
      where: {
        client: {
          id: id,
        },
        isActive: true,
      },
    });
  }

  findOne(id: any) {
    try {
      return this.vehicleRepository.findOne({
        where: {
          id: id,
          isActive: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    try {
      const date = new Date();
      updateVehicleDto.updatedAt = date;
      return this.vehicleRepository.update(id, updateVehicleDto);
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: number) {
    try {
      return this.vehicleRepository.update(id, {
        isActive: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
