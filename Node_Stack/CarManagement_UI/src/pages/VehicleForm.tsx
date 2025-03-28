import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { vehicleService } from '../services/api';
import { Vehicle } from '../types/vehicle';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { toast } from '../components/ui/use-toast';

const vehicleSchema = z.object({
  brand: z.string().min(1, 'Marca é obrigatória'),
  model: z.string().min(1, 'Modelo é obrigatório'),
  year: z.number().min(1900, 'Ano inválido'),
  price: z.number().min(0, 'Preço deve ser maior que zero'),
  sold: z.boolean(),
});

type VehicleFormData = z.infer<typeof vehicleSchema>;

export function VehicleForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { register, handleSubmit, formState: { errors } } = useForm<VehicleFormData>({
    resolver: zodResolver(vehicleSchema),
  });

  const { data: vehicle, isLoading } = useQuery({
    queryKey: ['vehicle', id],
    queryFn: () => id ? vehicleService.getById(parseInt(id)) : null,
    enabled: !!id,
  });

  const createMutation = useMutation({
    mutationFn: vehicleService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
      toast({
        title: 'Sucesso',
        description: 'Veículo criado com sucesso!',
      });
      navigate('/vehicles');
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: VehicleFormData }) =>
      vehicleService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
      toast({
        title: 'Sucesso',
        description: 'Veículo atualizado com sucesso!',
      });
      navigate('/vehicles');
    },
  });

  const onSubmit = (data: VehicleFormData) => {
    if (id) {
      updateMutation.mutate({ id: parseInt(id), data });
    } else {
      createMutation.mutate(data);
    }
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">
        {id ? 'Editar Veículo' : 'Novo Veículo'}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="brand">Marca</Label>
          <Input
            id="brand"
            {...register('brand')}
            defaultValue={vehicle?.brand}
          />
          {errors.brand && (
            <p className="text-sm text-red-500">{errors.brand.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="model">Modelo</Label>
          <Input
            id="model"
            {...register('model')}
            defaultValue={vehicle?.model}
          />
          {errors.model && (
            <p className="text-sm text-red-500">{errors.model.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="year">Ano</Label>
          <Input
            id="year"
            type="number"
            {...register('year', { valueAsNumber: true })}
            defaultValue={vehicle?.year}
          />
          {errors.year && (
            <p className="text-sm text-red-500">{errors.year.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="price">Preço</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            {...register('price', { valueAsNumber: true })}
            defaultValue={vehicle?.price}
          />
          {errors.price && (
            <p className="text-sm text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="sold"
            {...register('sold')}
            defaultChecked={vehicle?.sold}
          />
          <Label htmlFor="sold">Vendido</Label>
        </div>

        <div className="flex space-x-4">
          <Button type="submit">
            {id ? 'Atualizar' : 'Criar'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/vehicles')}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
} 