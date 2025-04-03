import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from '../pages/layout/BaseLayout';
import { DashboardPage } from '../pages/dashboard/DashboardPage';
import { Vehicles } from '../pages/vehicle/VehiclePage';
import { VehicleForm } from '../pages/vehicle/VehicleForm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'vehicles',
        element: <Vehicles />,
      },
      {
        path: 'vehicles/new',
        element: <VehicleForm />,
      },
      {
        path: 'vehicles/:id',
        element: <VehicleForm />,
      },
    ],
  },
]); 