import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import WeatherPage from '../pages/weatherPage'


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/LoginPage' element={<LoginPage />} />
            <Route path='/RegisterPage' element={<RegisterPage />} />
            <Route path='/WeatherPage' element={<WeatherPage />} />
        </Routes>
    )
}