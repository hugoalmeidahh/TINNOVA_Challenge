import { PrismaClient } from '@prisma/client';
import { Vehicle } from '../entity/Vehicle';

const prisma = new PrismaClient();

export class VehicleRepository {
  async findAll(): Promise<Vehicle[]> {
    return prisma.vehicle.findMany();
  }

  async findById(id: number): Promise<Vehicle | null> {
    return prisma.vehicle.findUnique({
      where: { id },
    });
  }

  async create(vehicle: Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt'>): Promise<Vehicle> {
    return prisma.vehicle.create({
      data: vehicle,
    });
  }

  async update(id: number, vehicle: Partial<Vehicle>): Promise<Vehicle> {
    return prisma.vehicle.update({
      where: { id },
      data: vehicle,
    });
  }

  async patch(id: number, vehicle: Partial<Vehicle>): Promise<Vehicle> {
    return prisma.vehicle.update({
      where: { id },
      data: vehicle,
    });
  }

  async delete(id: number): Promise<Vehicle> {
    return prisma.vehicle.delete({
      where: { id },
    });
  }
} 