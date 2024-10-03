import { Routes, Route, Navigate } from 'react-router-dom'
import { TelaDeLogin } from '../pages/tela-de-login'

export const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/login" element={<TelaDeLogin/>} />

            <Route path="*" element={<Navigate to="/listagem" />} />
        </Routes>

    )
}