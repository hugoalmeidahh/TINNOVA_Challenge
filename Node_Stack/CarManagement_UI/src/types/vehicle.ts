export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  sold: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateVehicleDTO {
  vehicle: string;
  brand: string;
  year: number;
  description: string;
  sold?: boolean;
}

export interface UpdateVehicleDTO extends Partial<CreateVehicleDTO> {} 