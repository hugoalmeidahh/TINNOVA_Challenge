import api from '../../utils/api';
import { Vehicle } from '../vehicle/VehicleType';


export const dashboardService = {

    getVehiclesByYear: async (): Promise<{ [key: number]: number }> => {
        const vehicles = await api.get('/vehicles');
        return vehicles.data.reduce((acc: { [key: number]: number }, vehicle: Vehicle) => {
            acc[vehicle.year] = (acc[vehicle.year] || 0) + 1;
            return acc;
        }, {});
    }

}   
