import '@jest/globals';
import { VehicleService } from '../VehicleService';
import { VehicleRepository } from '../../repository/VehicleRepository';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';

jest.mock('../../repository/VehicleRepository');

describe('VehicleService', () => {
  let service: VehicleService;
  let repository: jest.Mocked<VehicleRepository>;

  beforeEach(() => {
    repository = new VehicleRepository() as jest.Mocked<VehicleRepository>;
    service = new VehicleService();
  });

  describe('getAllVehicles', () => {
    it('should return all vehicles', async () => {
      const mockVehicles = [
        { id: 1, vehicle: 'Civic', brand: 'Honda', year: 2020, description: 'Sedan compacto', sold: false },
        { id: 2, vehicle: 'Corolla', brand: 'Toyota', year: 2021, description: 'Sedan confiável', sold: true },
      ];

      repository.findAll.mockResolvedValue(mockVehicles);

      const result = await service.getAllVehicles();

      expect(result).toEqual(mockVehicles);
      expect(repository.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('getVehicleById', () => {
    it('should return a vehicle by id', async () => {
      const mockVehicle = {
        id: 1,
        vehicle: 'Civic',
        brand: 'Honda',
        year: 2020,
        description: 'Sedan compacto',
        sold: false,
      };

      repository.findById.mockResolvedValue(mockVehicle);

      const result = await service.getVehicleById(1);

      expect(result).toEqual(mockVehicle);
      expect(repository.findById).toHaveBeenCalledWith(1);
    });

    it('should throw error when vehicle is not found', async () => {
      repository.findById.mockResolvedValue(null);

      await expect(service.getVehicleById(1)).rejects.toThrow('Veículo não encontrado');
    });
  });

  describe('createVehicle', () => {
    it('should create a new vehicle', async () => {
      const newVehicle = {
        vehicle: 'Civic',
        brand: 'Honda',
        year: 2020,
        description: 'Sedan compacto',
        sold: false,
      };

      const createdVehicle = { id: 1, ...newVehicle };

      repository.create.mockResolvedValue(createdVehicle);

      const result = await service.createVehicle(newVehicle);

      expect(result).toEqual(createdVehicle);
      expect(repository.create).toHaveBeenCalledWith(newVehicle);
    });

    it('should throw error when year is invalid', async () => {
      const newVehicle = {
        vehicle: 'Civic',
        brand: 'Honda',
        year: 1800,
        description: 'Sedan compacto',
        sold: false,
      };

      await expect(service.createVehicle(newVehicle)).rejects.toThrow('Ano do veículo inválido');
    });

    it('should throw error when required fields are missing', async () => {
      const newVehicle = {
        vehicle: '',
        brand: 'Honda',
        year: 2020,
        description: '',
        sold: false,
      };

      await expect(service.createVehicle(newVehicle)).rejects.toThrow('Todos os campos são obrigatórios');
    });
  });

  describe('updateVehicle', () => {
    it('should update an existing vehicle', async () => {
      const existingVehicle = {
        id: 1,
        vehicle: 'Civic',
        brand: 'Honda',
        year: 2020,
        description: 'Sedan compacto',
        sold: false,
      };

      const updateData = {
        sold: true,
      };

      const updatedVehicle = { ...existingVehicle, ...updateData };

      repository.findById.mockResolvedValue(existingVehicle);
      repository.update.mockResolvedValue(updatedVehicle);

      const result = await service.updateVehicle(1, updateData);

      expect(result).toEqual(updatedVehicle);
      expect(repository.update).toHaveBeenCalledWith(1, updateData);
    });

    it('should throw error when vehicle is not found', async () => {
      repository.findById.mockResolvedValue(null);

      await expect(service.updateVehicle(1, { sold: true })).rejects.toThrow('Veículo não encontrado');
    });

    it('should throw error when year is invalid', async () => {
      const existingVehicle = {
        id: 1,
        vehicle: 'Civic',
        brand: 'Honda',
        year: 2020,
        description: 'Sedan compacto',
        sold: false,
      };

      repository.findById.mockResolvedValue(existingVehicle);

      await expect(service.updateVehicle(1, { year: 1800 })).rejects.toThrow('Ano do veículo inválido');
    });

    it('should throw error when required fields are empty', async () => {
      const existingVehicle = {
        id: 1,
        vehicle: 'Civic',
        brand: 'Honda',
        year: 2020,
        description: 'Sedan compacto',
        sold: false,
      };

      repository.findById.mockResolvedValue(existingVehicle);

      await expect(service.updateVehicle(1, { vehicle: '', description: '' })).rejects.toThrow('Os campos não podem estar vazios');
    });
  });

  describe('deleteVehicle', () => {
    it('should delete an existing vehicle', async () => {
      const existingVehicle = {
        id: 1,
        vehicle: 'Civic',
        brand: 'Honda',
        year: 2020,
        description: 'Sedan compacto',
        sold: false,
      };

      repository.findById.mockResolvedValue(existingVehicle);
      repository.delete.mockResolvedValue(existingVehicle);

      const result = await service.deleteVehicle(1);

      expect(result).toEqual(existingVehicle);
      expect(repository.delete).toHaveBeenCalledWith(1);
    });

    it('should throw error when vehicle is not found', async () => {
      repository.findById.mockResolvedValue(null);

      await expect(service.deleteVehicle(1)).rejects.toThrow('Veículo não encontrado');
    });
  });
}); 