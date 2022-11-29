import { SignIn } from '../pages/SignIn';
 import { Routes,Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Integracao } from '../pages/Integracao';

export default function RoutesApp(){
    return(
        
            <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/integracao" element={<Integracao />} />
            </Routes>
     )
        
}