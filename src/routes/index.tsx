import { SignIn } from '../pages/SignIn';
 import { Routes,Route } from 'react-router-dom';
import { Painel } from '../pages/Painel';
import { Integracao } from '../pages/Integracao';
import { Configuracao } from '../pages/configuracao';
import { Licenca } from '../pages/configuracao/licenca';

export default function RoutesApp(){
    return(
        
            <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/painel" element={<Painel />} />
            <Route path="/integracao" element={<Integracao />} />
            
            <Route path="/configuracao" element={<Configuracao />} />
            <Route path="/configuracao/licenca" element={<Licenca />} />

            </Routes>
     )
        
}