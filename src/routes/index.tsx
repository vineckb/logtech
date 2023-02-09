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
import { Motivo } from '../pages/Painel/motivo';
import { CreateMotivos } from '../pages/Painel/motivo/createMotivo';
import { UsersLogados } from '../pages/Painel/usuariosLogados';
import { CreateTipoMotivos } from '../pages/Painel/tipoMotivo';

export default function RoutesApp(){
    return(
        
            <Routes>

            <Route path="/" element={<SignIn />} />
            
            <Route path="/painel" element={<Painel />} />
            <Route path="/painel/usuarios" element={<Users />} />
            <Route path="/painel/usuarios/create" element={<CreateUsers />} />
            <Route path="/painel/motivo" element={<Motivo />} />
            <Route path="/painel/motivo/tipo-motivo" element={<CreateTipoMotivos />} />
            <Route path="/painel/motivUsersLogadoso/create" element={<CreateMotivos />} />
            <Route path="/painel/usuarios-logado" element={<UsersLogados />} />
            
            <Route path="/integracao" element={<Integracao />} />
            
            <Route path="/configuracao" element={<Configuracao />} />
            <Route path="/configuracao/licenca" element={<Licenca />} />
            <Route path="/configuracao/conexao-cliente" element={<ConexaoCliente />} />
            <Route path="/configuracao/conexao-cliente/create" element={<CreateConexaoCliente />} />

            

            </Routes>
     )
}