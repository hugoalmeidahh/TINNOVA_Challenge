import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { VehicleForm } from './VehicleForm';
import { vehicleService } from './VehicleService';
import { VehicleFormData } from './VehicleType';

export function VehiclePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: VehicleFormData) => {
    try {
      setIsLoading(true);
      await vehicleService.create(data);
      navigate('/vehicles');
    } catch (error) {
      console.error('Erro ao criar veículo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Novo Veículo</h1>
      <VehicleForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
} 