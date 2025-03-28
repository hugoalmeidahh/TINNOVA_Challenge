import axios from 'axios';
import { CreateVehicleDTO, UpdateVehicleDTO, Vehicle } from '../types/vehicle';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const vehicleService = {
  getAll: async (): Promise<Vehicle[]> => {
    const response = await api.get('/vehicle');
    return response.data;
  },

  getById: async (id: number): Promise<Vehicle> => {
    const response = await api.get(`/vehicle/${id}`);
    return response.data;
  },

  create: async (data: CreateVehicleDTO): Promise<Vehicle> => {
    const response = await api.post('/vehicle', data);
    return response.data;
  },

  update: async (id: number, data: UpdateVehicleDTO): Promise<Vehicle> => {
    const response = await api.put(`/vehicle/${id}`, data);
    return response.data;
  },

  patch: async (id: number, data: UpdateVehicleDTO): Promise<Vehicle> => {
    const response = await api.patch(`/vehicle/${id}`, data);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/vehicle/${id}`);
  },
}; 