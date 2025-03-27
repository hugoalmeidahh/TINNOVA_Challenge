export interface Vehicle {
  id?: number;
  vehicle: string;
  brand: string;
  year: number;
  description: string;
  sold: boolean;
  createdAt?: Date;
  updatedAt?: Date;
} 