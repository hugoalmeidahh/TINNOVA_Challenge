export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface VehicleFormData extends Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt'> {}

export interface CreateVehicleDTO {
  brand: string;
  model: string;
  year: number;
  price: number;
  sold?: boolean;
}

export interface UpdateVehicleDTO extends Partial<CreateVehicleDTO> {} 