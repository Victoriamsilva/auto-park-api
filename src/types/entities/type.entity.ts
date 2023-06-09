import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'type' })
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.type)
  vehicle: Vehicle[];
}
