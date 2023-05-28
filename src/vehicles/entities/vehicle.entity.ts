/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Client } from 'src/clients/entities/client.entity';
import { Type } from 'src/types/entities/type.entity';

@Entity({ name: 'vehicle' })
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  licensePlate: string;

  @Column({ default: true })
  isParked: boolean;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToOne(() => Client, (client) => client.vehicle)
  @JoinColumn({ name: 'clientId' })
  client: Client;

  @ManyToOne(() => Type, (type) => type.vehicle)
  @JoinColumn({ name: 'typeId' })
  type: Type;
}
