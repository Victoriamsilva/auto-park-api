import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { TypesModule } from './types/types.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/entities/client.entity';
import { Vehicle } from './vehicles/entities/vehicle.entity';
import { Type } from './types/entities/type.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'autoPark',
      entities: [Client, Vehicle, Type],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Client, Vehicle, Type]),
    ClientsModule,
    VehiclesModule,
    TypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
