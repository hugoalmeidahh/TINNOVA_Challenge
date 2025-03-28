import { routes } from "../constants"

import { Route, Routes } from "react-router-dom"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.DASHBOARD} element={<Dashboard />} />
            <Route path={routes.VEHICLES} element={<Vehicles />} />
        </Routes>
    )
}