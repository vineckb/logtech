import { SignIn } from '../pages/SignIn';
 import { Routes,Route } from 'react-router-dom';
import { Painel } from '../pages/Painel';
import { Integracao } from '../pages/Integracao';

export default function RoutesApp(){
    return(
        
            <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/painel" element={<Painel />} />
            <Route path="/integracao" element={<Integracao />} />
            </Routes>
     )
        
}