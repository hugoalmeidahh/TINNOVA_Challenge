import { Vehicle } from '../entity/Vehicle';
import { VehicleRepository } from '../repository/VehicleRepository';

export class VehicleService {
  private repository: VehicleRepository;

  constructor() {
    this.repository = new VehicleRepository();
  }

  async getAllVehicles(): Promise<Vehicle[]> {
    return this.repository.findAll();
  }

  async getVehicleById(id: number): Promise<Vehicle | null> {
    const vehicle = await this.repository.findById(id);
    if (!vehicle) {
      throw new Error('Veículo não encontrado');
    }
    return vehicle;
  }

  async createVehicle(vehicle: Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt'>): Promise<Vehicle> {
    if (vehicle.year < 1900 || vehicle.year > new Date().getFullYear()) {
      throw new Error('Ano do veículo inválido');
    }
    if (!vehicle.vehicle || !vehicle.brand || !vehicle.description) {
      throw new Error('Todos os campos são obrigatórios');
    }
    return this.repository.create(vehicle);
  }

  async updateVehicle(id: number, vehicle: Partial<Vehicle>): Promise<Vehicle> {
    const existingVehicle = await this.repository.findById(id);
    if (!existingVehicle) {
      throw new Error('Veículo não encontrado');
    }

    if (vehicle.year && (vehicle.year < 1900 || vehicle.year > new Date().getFullYear())) {
      throw new Error('Ano do veículo inválido');
    }

    if (vehicle.vehicle === '' || vehicle.brand === '' || vehicle.description === '') {
      throw new Error('Os campos não podem estar vazios');
    }

    return this.repository.update(id, vehicle);
  }

  async patchVehicle(id: number, vehicle: Partial<Vehicle>): Promise<Vehicle> {
    const existingVehicle = await this.repository.findById(id);
    if (!existingVehicle) {
      throw new Error('Veículo não encontrado');
    }

    if (vehicle.year && (vehicle.year < 1900 || vehicle.year > new Date().getFullYear())) {
      throw new Error('Ano do veículo inválido');
    }

    if (vehicle.vehicle === '' || vehicle.brand === '' || vehicle.description === '') {
      throw new Error('Os campos não podem estar vazios');
    }

    return this.repository.patch(id, vehicle);
  }

  async deleteVehicle(id: number): Promise<Vehicle> {
    const existingVehicle = await this.repository.findById(id);
    if (!existingVehicle) {
      throw new Error('Veículo não encontrado');
    }
    return this.repository.delete(id);
  }
} 