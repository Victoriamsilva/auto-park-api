export class CreateVehicleDto {
  name: string;
  licensePlate: string;
  isParked: boolean;
  createdAt: Date;
  updatedAt: Date;
  clientId: number;
  typeId: number;
}
