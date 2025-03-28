import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { vehicleService } from '../services/api';
import { Vehicle } from '../types/vehicle';

export function Dashboard() {
  const { data: vehicles, isLoading } = useQuery({
    queryKey: ['vehicles'],
    queryFn: vehicleService.getAll,
  });

  const vehiclesByYear = vehicles?.reduce((acc: { [key: number]: number }, vehicle: Vehicle) => {
    acc[vehicle.year] = (acc[vehicle.year] || 0) + 1;
    return acc;
  }, {});

  const chartData = vehiclesByYear
    ? Object.entries(vehiclesByYear).map(([year, count]) => ({
        year: parseInt(year),
        count,
      }))
    : [];

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bem-vindo ao Sistema de Gerenciamento de Veículos</h2>
        <p className="text-gray-600">
          Aqui você pode visualizar e gerenciar todos os veículos cadastrados no sistema.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Resumo</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Total de veículos: <span className="font-semibold">{vehicles?.length || 0}</span>
            </p>
            <p className="text-gray-600">
              Veículos vendidos:{' '}
              <span className="font-semibold">
                {vehicles?.filter((v) => v.sold).length || 0}
              </span>
            </p>
            <p className="text-gray-600">
              Veículos disponíveis:{' '}
              <span className="font-semibold">
                {vehicles?.filter((v) => !v.sold).length || 0}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Veículos por Ano</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
} 