import api from '../../utils/api';
import { Vehicle } from './VehicleType';

export const vehicleService = {
    getAll: async (): Promise<Vehicle[]> => {
      const response = await api.get('/vehicles');
      return response.data;
    },
  
    getById: async (id: number): Promise<Vehicle> => {
      const response = await api.get(`/vehicles/${id}`);
      return response.data;
    },
  
    create: async (data: Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt'>): Promise<Vehicle> => {
      const response = await api.post('/vehicles', data);
      return response.data;
    },
  
    update: async (id: number, data: Partial<Vehicle>): Promise<Vehicle> => {
      const response = await api.put(`/vehicles/${id}`, data);
      return response.data;
    },
  
    patch: async (id: number, data: Partial<Vehicle>): Promise<Vehicle> => {
      const response = await api.patch(`/vehicles/${id}`, data);
      return response.data;
    },
  
    delete: async (id: number): Promise<void> => {
      await api.delete(`/vehicles/${id}`);
    },
  }; 