export class CreateVehicleDto {
  name: string;
  licensePlate: string;
  createdAt: Date;
  updatedAt: Date;
  clientId: number;
  typeId: number;
  isActive: boolean;
}
