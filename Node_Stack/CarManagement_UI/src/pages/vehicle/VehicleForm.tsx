import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { VehicleFormData } from './VehicleType';

interface VehicleFormProps {
  initialData?: VehicleFormData;
  onSubmit: (data: VehicleFormData) => void;
  isLoading?: boolean;
}

export function VehicleForm({ initialData, onSubmit, isLoading }: VehicleFormProps) {
  const [formData, setFormData] = useState<VehicleFormData>(
    initialData || {
      brand: '',
      model: '',
      year: new Date().getFullYear(),
      color: '',
      price: 0,
      description: '',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'year' || name === 'price' ? Number(value) : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="brand">Marca</Label>
          <Input
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="model">Modelo</Label>
          <Input
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="year">Ano</Label>
          <Input
            id="year"
            name="year"
            type="number"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="color">Cor</Label>
          <Input
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Preço</Label>
          <Input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Salvando...' : 'Salvar'}
      </Button>
    </form>
  );
} 