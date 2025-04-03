import { Routes, Route } from 'react-router-dom';
import { VehiclePage } from './VehiclePage';

export function VehicleRoutes() {
  return (
    <Routes>
      <Route path="/new" element={<VehiclePage />} />
    </Routes>
  );
}
