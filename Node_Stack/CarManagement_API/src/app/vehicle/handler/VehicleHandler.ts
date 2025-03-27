import { Request, Response } from 'express';
import { VehicleService } from '../service/VehicleService';
import { Vehicle } from '../entity/Vehicle';

export class VehicleHandler {
  private service: VehicleService;

  constructor() {
    this.service = new VehicleService();
  }

  async getAllVehicles(req: Request, res: Response): Promise<void> {
    try {
      const vehicles = await this.service.getAllVehicles();
      res.json(vehicles);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar veículos' });
    }
  }

  async getVehicleById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const vehicle = await this.service.getVehicleById(id);
      res.json(vehicle);
    } catch (error) {
      if (error instanceof Error && error.message === 'Veículo não encontrado') {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Erro ao buscar veículo' });
      }
    }
  }

  async createVehicle(req: Request, res: Response): Promise<void> {
    try {
      const vehicle = await this.service.createVehicle(req.body);
      res.status(201).json(vehicle);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Erro ao criar veículo' });
      }
    }
  }

  async updateVehicle(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const vehicle = await this.service.updateVehicle(id, req.body);
      res.json(vehicle);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Veículo não encontrado') {
          res.status(404).json({ error: error.message });
        } else {
          res.status(400).json({ error: error.message });
        }
      } else {
        res.status(500).json({ error: 'Erro ao atualizar veículo' });
      }
    }
  }

  async patchVehicle(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const vehicle = await this.service.patchVehicle(id, req.body);
      res.json(vehicle);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Veículo não encontrado') {
          res.status(404).json({ error: error.message });
        } else {
          res.status(400).json({ error: error.message });
        }
      } else {
        res.status(500).json({ error: 'Erro ao atualizar parcialmente o veículo' });
      }
    }
  }

  async deleteVehicle(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      await this.service.deleteVehicle(id);
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error && error.message === 'Veículo não encontrado') {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Erro ao deletar veículo' });
      }
    }
  }
} 