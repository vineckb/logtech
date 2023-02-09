import { SignIn } from '../pages/SignIn';
 import { Routes,Route } from 'react-router-dom';
import { Painel } from '../pages/Painel';
import { Integracao } from '../pages/Integracao';
import { Configuracao } from '../pages/configuracao';
import { Licenca } from '../pages/configuracao/licenca';
import { ConexaoCliente } from '../pages/configuracao/conexaoCliente';
import { CreateConexaoCliente } from '../pages/configuracao/conexaoCliente/createConexaoCliente';
import { Users } from '../pages/Painel/usuarios';
import { CreateUsers } from '../pages/Painel/usuarios/createUsuarios';

export default function RoutesApp(){
    return(
        
            <Routes>

            <Route path="/" element={<SignIn />} />
            
            <Route path="/painel" element={<Painel />} />
            <Route path="/painel/usuarios" element={<Users />} />
            <Route path="/painel/usuarios/create" element={<CreateUsers />} />
            
            <Route path="/integracao" element={<Integracao />} />
            
            <Route path="/configuracao" element={<Configuracao />} />
            <Route path="/configuracao/licenca" element={<Licenca />} />
            <Route path="/configuracao/conexao-cliente" element={<ConexaoCliente />} />
            <Route path="/configuracao/conexao-cliente/create" element={<CreateConexaoCliente />} />

            </Routes>
     )
}